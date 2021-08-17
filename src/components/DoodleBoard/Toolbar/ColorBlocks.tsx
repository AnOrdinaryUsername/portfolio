import * as React from 'react';
import styled from 'styled-components';
import ColorPicker from './ColorPicker';
import colors from './colors';

interface ColorBlocksProps {
  isToolbarActive: boolean;
  colorBoxWithFocus: string;
  updateColorAndOutline: React.MouseEventHandler<HTMLDivElement & HTMLButtonElement> &
    React.TouchEventHandler<HTMLDivElement>;
}

function ColorBlocks({
  isToolbarActive,
  colorBoxWithFocus,
  updateColorAndOutline,
}: ColorBlocksProps) {
  return (
    <ColorsWrapper>
      {colors.map((props, index) => (
        <ColorPicker
          tabIndex={isToolbarActive ? 0 : -1}
          isInFocus={props.hexColorCode === colorBoxWithFocus}
          onSelectColor={updateColorAndOutline}
          {...props}
          key={index}
        />
      ))}
    </ColorsWrapper>
  );
}

const ColorsWrapper = styled.div`
  grid-area: colors;
  display: grid;
  grid-template-columns: repeat(3, 5rem);
  gap: 1.2rem;
  width: fit-content;
`;

export default ColorBlocks;
