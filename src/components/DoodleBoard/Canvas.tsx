import { useWindowSize } from 'hooks';
import * as React from 'react';
import styled from 'styled-components';

type Coordinates = {
  x: number;
  y: number;
};

function Canvas() {
  const { width, height } = useWindowSize();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = React.useState<Coordinates | null>(null);

  const grabCurrentMousePosition = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvasRef.current) {
      const boundingRect = canvasRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - boundingRect.x,
        y: event.clientY - boundingRect.y,
      });
    }
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (event.buttons !== 1) {
      return;
    }

    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext('2d');

      if (context) {
        context.beginPath();
        context.lineWidth = 20;
        context.lineCap = 'round';
        context.strokeStyle = '#2b2b2b';

        if (mousePosition) {
          context.moveTo(mousePosition.x, mousePosition.y);
          grabCurrentMousePosition(event);
          context.lineTo(mousePosition.x, mousePosition.y);
          context.stroke();
        }
      }
    }
  };

  return (
    <DoodleCanvas
      width={width}
      height={height}
      ref={canvasRef}
      onMouseMove={draw}
      onMouseDown={grabCurrentMousePosition}
      onMouseEnter={grabCurrentMousePosition}
    />
  );
}

export const DoodleCanvas = styled.canvas`
  min-height: 100vh;
  width: 100%;
  margin: 4.8rem 0;
  background: hsl(0, 0%, 100%);
`;

export default Canvas;
