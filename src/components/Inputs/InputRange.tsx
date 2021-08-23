import * as React from 'react';
import styled from 'styled-components';
import { NORD_THEME } from '../../constants';

interface InputRangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  id: string;
  min: number;
  max: number;
  step: number;
  initialValue: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function InputRange({ labelName, id, min, max, step, initialValue, ...props }: InputRangeProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <Wrapper>
      <Label htmlFor={id}>{labelName}</Label>
      <Input
        ref={inputRef}
        type="range"
        id={id}
        name={id}
        min={min}
        max={max}
        step={step}
        value={initialValue}
        {...props}
      />
      <RangeCount>{inputRef?.current?.value}</RangeCount>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'label label' 'input count';
  place-items: start;
  gap: 1.2rem;
  height: min-content;
  line-height: 1;
`;

const Label = styled.label`
  grid-area: label;
  align-self: end;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${NORD_THEME.nord3};
`;

const Input = styled.input`
  --thumbSize: 2.4rem;
  --trackSize: 1.6rem;
  --thumbBg: ${NORD_THEME.nord10};
  --trackBg: hsl(0, 0%, 96%);
  --progressBg: ${NORD_THEME.nord3};
  /* webkit progress workaround */
  --webkitProgressPercent: 0%;
  --shadow: 0 0 2px 0 hsl(0deg 0% 7%);

  grid-area: input;
  appearance: none;
  background-color: inherit;
  margin: 0;
  padding: 0;

  &:focus {
    outline: 2px auto red;
  }

  &::focus:not(:focus-visible) {
    outline: none;
  }

  /* Thumb (the thing you hold down/interact with) */
  &::-webkit-slider-thumb {
    appearance: none;
    width: var(--thumbSize);
    height: var(--thumbSize);
    background-color: var(--thumbBg);
    border-radius: calc(var(--thumbSize) / 4);
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    margin-top: calc(((var(--thumbSize) - var(--trackSize)) / 2) * -1);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    appearance: none;
    width: var(--thumbSize);
    height: var(--thumbSize);
    background-color: var(--thumbBg);
    border-radius: calc(var(--thumbSize) / 4);
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    margin-top: calc(((var(--thumbSize) - var(--trackSize)) / 2) * -1);
    cursor: pointer;
  }

  &::-ms-thumb {
    appearance: none;
    width: var(--thumbSize);
    height: var(--thumbSize);
    background-color: var(--thumbBg);
    border-radius: calc(var(--thumbSize) / 2);
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    margin-top: calc(((var(--thumbSize) - var(--trackSize)) / 2) * -1);
    cursor: pointer;
  }

  /* Track (the entire line) */
  &::-webkit-slider-runnable-track {
    height: var(--trackSize);
    background-image: linear-gradient(
      90deg,
      var(--progressBg) var(--webkitProgressPercent),
      var(--trackBg) var(--webkitProgressPercent)
    );
    border-radius: calc(var(--trackSize) / 2);
    box-shadow: var(--shadow);
  }

  &::-moz-range-track {
    height: var(--trackSize);
    background-color: var(--trackBg);
    border-radius: calc(var(--trackSize) / 2);
    box-shadow: var(--shadow);
  }

  &::-ms-track {
    height: var(--trackSize);
    background-color: var(--trackBg);
    border-radius: calc(var(--trackSize) / 2);
    box-shadow: var(--shadow);
  }

  /* Progressbar (the line to the left of the thumb) */
  &::-moz-range-progress {
    height: var(--trackSize);
    background-color: var(--progressBg);
    border-radius: calc(var(--trackSize) / 2) 0 0 calc(var(--trackSize) / 2);
  }

  &::-ms-fill-lower {
    height: var(--trackSize);
    background-color: var(--progressBg);
    border-radius: calc(var(--trackSize) / 2) 0 0 calc(var(--trackSize) / 2);
  }
`;

const RangeCount = styled.span`
  grid-area: count;
  width: 3ch;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${NORD_THEME.nord3};
`;

export default InputRange;
