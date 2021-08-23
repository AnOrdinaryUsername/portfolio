import { useToggle } from 'hooks';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';
import { DeleteDialog } from './Dialog';
import Drawing from './Drawing';
import type { DrawEvent, Paths, StrokeSettings } from './shared';
import Toolbar from './Toolbar/';

const defaultSettings: StrokeSettings = {
  isSolidLine: true,
  strokeWidth: 10,
  color: 'black',
  opacity: 1,
  blendMode: 'multiply',
};

function DoodleBoard() {
  /* Refs
      boardRef -> To grab the drawing boards clientRect for calculating coordinates
      divRef -> To grab an image of the drawing
  */
  const boardRef = React.useRef<HTMLDivElement>(null);
  const divRef = React.useRef<HTMLDivElement>(null);

  /* Drawing
      isDrawing -> Flag for when the user is currently drawing or not (touchend or mouseup)
      lines -> Contains all the cartesian coordinates for drawing lines in the form of SVG paths
  */
  const [isDrawing, setIsDrawing] = React.useState<boolean>(false);
  const [lines, setLines] = React.useState<Paths[][]>([]);

  /* Stroke properties
      strokeSettings -> Settings for SVG stroke properties
      customColor -> Get value of react-colorful onChange color
  */
  const [strokeSettings, setStrokeSettings] = React.useState<StrokeSettings>(defaultSettings);
  const [customColor, setCustomColor] = React.useState<string>('#2b2b2b');

  const [isDialogOpen, setIsDialogOpen] = useToggle();
  const router = useRouter();

  const goBackToPreviousPage = () => router.back();

  const grabCoordinates = (event: DrawEvent) => {
    if (boardRef.current) {
      const boundingRect = boardRef.current.getBoundingClientRect();

      if ('clientX' in event) {
        return {
          x: event.clientX - boundingRect.x,
          y: event.clientY - boundingRect.y,
        };
      } else {
        return {
          x: event.touches[0].clientX - boundingRect.x,
          y: event.touches[0].clientY - boundingRect.y,
        };
      }
    }

    return {
      x: 0,
      y: 0,
    };
  };

  const getStartingPoint = (event: DrawEvent) => {
    if ('button' in event) {
      if (event.button !== 0) {
        return;
      }
    }

    const point = grabCoordinates(event);

    setLines((prevState) => {
      const copiedArray = [...prevState];

      const newPath = {
        strokeSettings,
        points: [point],
      };

      copiedArray.push([newPath]);
      return copiedArray;
    });
    setIsDrawing(true);
  };

  const createPath = (event: DrawEvent) => {
    if (!isDrawing) {
      return;
    }

    const point = grabCoordinates(event);

    setLines((prevState) => {
      const copiedArray = [...prevState];
      const lastPath = copiedArray.length - 1;
      copiedArray[lastPath][0].points.push(point);
      return copiedArray;
    });
  };

  const updateStrokeSettings = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setStrokeSettings((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const changeStrokeColor = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newStrokeColor = event.currentTarget.id;
    setStrokeSettings((prevState) => ({
      ...prevState,
      color: newStrokeColor,
    }));
  };

  // Since lines overlap, using white on a white background sort of works as an eraser.
  const useEraser = () => {
    setStrokeSettings((prevState) => ({
      ...prevState,
      blendMode: 'normal',
      color: '#FFFFFF',
    }));
  };

  const deleteDrawing = () => {
    setLines([]);
  };

  const undoLine = () => {
    setLines((prevState) => {
      const drawing = [...prevState];

      /* The below code removes each point from a line. 
      * If you want to include it, uncomment this block.

      if (drawing[lastPath][0].points.length !== 0) {
        drawing[lastPath][0].points.pop();
      }
      */

      // Remove the last path made in its entirety
      if (drawing.length !== 0) {
        drawing.pop();
      }

      return drawing;
    });
  };

  React.useEffect(() => {
    setStrokeSettings((prevState) => ({
      ...prevState,
      color: customColor,
    }));
  }, [customColor]);

  React.useEffect(() => {
    const disableDrawing = () => {
      setIsDrawing(false);
    };

    document.addEventListener('mouseup', disableDrawing);
    document.addEventListener('touchend', disableDrawing);

    return () => {
      document.removeEventListener('mouseup', disableDrawing);
      document.removeEventListener('touchend', disableDrawing);
    };
  }, []);

  return (
    <>
      <DrawingBoard
        ref={boardRef}
        onMouseDown={getStartingPoint}
        onMouseMove={createPath}
        onTouchStart={getStartingPoint}
        onTouchMove={createPath}
      >
        <DrawingWrapper ref={divRef}>
          <Drawing lines={lines} />
        </DrawingWrapper>
      </DrawingBoard>
      <Toolbar
        opacity={strokeSettings.opacity}
        strokeWidth={strokeSettings.strokeWidth}
        currentColor={strokeSettings.color}
        isDrawing={isDrawing}
        divRef={divRef}
        customColor={customColor}
        updateStrokeSettings={updateStrokeSettings}
        chooseCustomColor={(event) => setCustomColor(event)}
        goBack={goBackToPreviousPage}
        useEraser={useEraser}
        deleteDrawing={setIsDialogOpen}
        undoLine={undoLine}
        changeStrokeColor={changeStrokeColor}
      />
      <DeleteDialog
        zIndex={100}
        isOpen={isDialogOpen}
        onClose={setIsDialogOpen}
        deleteDrawing={deleteDrawing}
      />
    </>
  );
}

const DrawingBoard = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: hsl(0, 0%, 100%);
  /* Prevents pinch to zoom on mobile */
  touch-action: none;
`;

const DrawingWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: inherit;
`;

export default DoodleBoard;
