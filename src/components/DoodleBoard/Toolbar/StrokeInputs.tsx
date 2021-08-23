import { InputRange } from 'components/Inputs';
import * as React from 'react';
import styled from 'styled-components';

export interface StrokeInputsProps {
  opacity: number;
  strokeWidth: number;
  isToolbarActive: boolean;
  updateStrokeSettings: React.ChangeEventHandler<HTMLInputElement>;
}

function StrokeInputs({
  opacity,
  strokeWidth,
  isToolbarActive,
  updateStrokeSettings,
}: StrokeInputsProps) {
  return (
    <Wrapper>
      <InputRange
        tabIndex={isToolbarActive ? 0 : -1}
        labelName="Opacity"
        id="opacity"
        min={0.1}
        max={1.0}
        step={0.1}
        initialValue={opacity}
        onChange={updateStrokeSettings}
      />
      <InputRange
        tabIndex={isToolbarActive ? 0 : -1}
        labelName="Line width"
        id="strokeWidth"
        min={1}
        max={50}
        step={1}
        initialValue={strokeWidth}
        onChange={updateStrokeSettings}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-area: inputs;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
`;

export default StrokeInputs;
