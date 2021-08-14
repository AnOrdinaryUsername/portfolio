import styled from 'styled-components';
import type { Coordinates } from './shared';

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

export default Drawing;
