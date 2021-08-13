import * as React from 'react';
import styled from 'styled-components';

type Coordinates = {
  x: number;
  y: number;
};

type DrawEvent = React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>;

function DoodleBoard() {
  const boardRef = React.useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = React.useState<boolean>(false);
  const [lines, setLines] = React.useState<Coordinates[][]>([]);

  const relativeCoordinatesForEvent = (event: DrawEvent) => {
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

  const handleMouseDown = (event: DrawEvent) => {
    if ('button' in event) {
      if (event.button !== 0) {
        return;
      }
    }

    const point = relativeCoordinatesForEvent(event);

    setLines((prevState) => {
      const copiedArray = [...prevState];
      copiedArray.push([point]);
      return copiedArray;
    });
    setIsDrawing(true);
  };

  const handleMouseMove = (event: DrawEvent) => {
    if (!isDrawing) {
      return;
    }

    const point = relativeCoordinatesForEvent(event);
    setLines((prevState) => {
      const copiedArray = [...prevState];
      const lastStroke = copiedArray.length - 1;
      copiedArray[lastStroke].push(point);
      return copiedArray;
    });
  };

  React.useEffect(() => {
    const disableDrawing = () => {
      setIsDrawing(false);
    };

    document.addEventListener('mouseup', disableDrawing);

    disableDrawing();

    return () => document.removeEventListener('mouseup', disableDrawing);
  }, []);

  React.useEffect(() => {
    const disableDrawing = () => {
      setIsDrawing(false);
    };

    document.addEventListener('touchend', disableDrawing);

    disableDrawing();

    return () => document.removeEventListener('touchend', disableDrawing);
  }, []);

  return (
    <DrawingBoard
      ref={boardRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
    >
      <Drawing lines={lines} />
    </DrawingBoard>
  );
}

const DrawingBoard = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 4.8rem 0;
  background: hsl(0, 0%, 100%);
`;

interface DrawingProps {
  lines: Coordinates[][];
}

function Drawing({ lines }: DrawingProps) {
  return (
    <Svg>
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </Svg>
  );
}

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

interface DrawingLineProps {
  line: Coordinates[];
}

function DrawingLine({ line }: DrawingLineProps) {
  const pathData =
    'M ' +
    line
      .map((p) => {
        return `${p.x} ${p.y}`;
      })
      .join(' L ');

  return <Stroke d={pathData} />;
}

const Stroke = styled.path`
  fill: none;
  stroke-width: 10px;
  stroke: black;
  stroke-linejoin: round;
  stroke-linecap: round;
`;

export default DoodleBoard;
