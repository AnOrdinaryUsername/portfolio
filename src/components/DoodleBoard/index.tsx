import { sharedButtonStyles } from 'components/Buttons';
import { ArrowLeft } from 'components/Svgs/Icons';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';
import { NORD_THEME } from '../../constants';

type Coordinates = {
  x: number;
  y: number;
};

type DrawEvent = React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>;

function DoodleBoard() {
  const boardRef = React.useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = React.useState<boolean>(false);
  const [lines, setLines] = React.useState<Coordinates[][]>([]);
  const router = useRouter();

  const goBackToPreviousPage = () => router.back();

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
    document.addEventListener('touchend', disableDrawing);

    return () => {
      document.removeEventListener('mouseup', disableDrawing);
      document.removeEventListener('touchend', disableDrawing);
    };
  }, []);

  return (
    <DrawingBoard
      ref={boardRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
    >
      <BackButton onClick={goBackToPreviousPage}>
        <ArrowLeft height="20" />
        Go Back
      </BackButton>
      <Drawing lines={lines} />
    </DrawingBoard>
  );
}

const DrawingBoard = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  height: 100%;
  width: 100%;
  background: hsl(0, 0%, 100%);
`;

const BackButton = styled.button`
  ${sharedButtonStyles}
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 1rem 1.6rem;
  margin: 2.4rem;
  user-select: none;
  color: ${NORD_THEME.nord3};
  background: hsl(225, 22%, 91%);
  border-radius: 75px;

  & > *:first-child {
    align-self: flex-end;
    margin-right: 0.6rem;
  }
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
