import VisuallyHidden from 'components/VisuallyHidden';
import * as React from 'react';
import styled from 'styled-components';
import type { DrawEventHandler } from './shared';

export interface Color {
  hexColorCode: string;
  colorName: string;
}

interface ColorPickerProps extends Color {
  onSelectColor: DrawEventHandler;
}

function ColorPicker({ onSelectColor, hexColorCode, colorName }: ColorPickerProps) {
  return (
    <ColoredSquare onClick={onSelectColor} id={hexColorCode} boxColor={hexColorCode}>
      <VisuallyHidden text={colorName} />
    </ColoredSquare>
  );
}

interface ColoredSquareProps {
  boxColor: string;
}

const ColoredSquare = styled.div<ColoredSquareProps>`
  width: 6rem;
  height: 6rem;
  background: ${(p) => p.boxColor};
  cursor: pointer;
  border-radius: 4px;
`;

export default ColorPicker;
