import VisuallyHidden from 'components/VisuallyHidden';
import * as React from 'react';
import styled from 'styled-components';

export interface Color {
  hexColorCode: string;
  colorName: string;
}

interface ColorPickerProps extends Color {
  onSelectColor: React.MouseEventHandler<HTMLButtonElement>;
  tabIndex: number;
  isInFocus: boolean;
}

function ColorPicker({
  onSelectColor,
  tabIndex,
  isInFocus,
  hexColorCode,
  colorName,
}: ColorPickerProps) {
  return (
    <ColoredSquare
      onClick={onSelectColor}
      tabIndex={tabIndex}
      isInFocus={isInFocus}
      id={hexColorCode}
      boxColor={hexColorCode}
    >
      <VisuallyHidden text={colorName} />
    </ColoredSquare>
  );
}

interface ColoredSquareProps {
  boxColor: string;
  isInFocus: boolean;
}

const ColoredSquare = styled.button<ColoredSquareProps>`
  width: 5rem;
  height: 5rem;
  background: ${(p) => p.boxColor};
  cursor: pointer;
  border-radius: 4px;

  /* Shadow outline to know which element is currently selected */
  box-shadow: ${(p) => p.isInFocus && '0 0 0 6px hsl(242, 22%, 80%)'};

  /* Adds initial focus when color is selected. 
    Without this, the element doesn't gain initial focus.
  */
  &:focus {
    box-shadow: 0 0 0 6px hsl(242, 22%, 80%);
  }
`;

export default ColorPicker;
