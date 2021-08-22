import * as React from 'react';
import styled from 'styled-components';
import type { Coordinates, Paths, StrokeSettings } from './shared';

interface DrawingProps {
  lines: Paths[][];
}

function Drawing({ lines }: DrawingProps) {
  return (
    <Svg>
      {lines.map((line, index) => (
        <DrawingLine strokeSettings={line[0].strokeSettings} key={index} line={line[0].points} />
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
  strokeSettings: StrokeSettings;
}

function DrawingLine({ strokeSettings, line }: DrawingLineProps) {
  const pathData =
    'M ' +
    line
      .map((p) => {
        return `${p.x} ${p.y}`;
      })
      .join(' L ');

  return <Stroke strokeSettings={strokeSettings} d={pathData} />;
}

interface StrokeProps {
  strokeSettings: StrokeSettings;
}

const Stroke = styled.path<StrokeProps>`
  fill: none;
  stroke-width: ${(p) => `${p.strokeSettings.strokeWidth}px`};
  stroke: ${(p) => p.strokeSettings.color};
  stroke-linejoin: round;
  stroke-linecap: round;
  mix-blend-mode: ${(p) => p.strokeSettings.blendMode};
  opacity: ${(p) => p.strokeSettings.opacity};
`;

export default Drawing;
