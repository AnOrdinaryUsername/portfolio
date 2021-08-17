import * as React from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import styled from 'styled-components';

interface CustomColorProps {
  isToolbarActive: boolean;
  colorBoxWithFocus: string;
  customColor: string;
  updateColorAndOutline: React.MouseEventHandler<HTMLDivElement & HTMLButtonElement> &
    React.TouchEventHandler<HTMLDivElement>;
  chooseCustomColor: React.Dispatch<React.SetStateAction<string>>;
}

function CustomColor({
  isToolbarActive,
  colorBoxWithFocus,
  customColor,
  updateColorAndOutline,
  chooseCustomColor,
}: CustomColorProps) {
  return (
    <CustomColorWrapper>
      <HexColorPicker
        tabIndex={isToolbarActive ? 0 : -1}
        color={customColor}
        onChange={chooseCustomColor}
      />
      <CustomColorInput>
        <CustomColorButton
          tabIndex={isToolbarActive ? 0 : -1}
          isInFocus={customColor === colorBoxWithFocus}
          id={customColor}
          onClick={updateColorAndOutline}
          aria-label={`Use the color ${customColor}`}
          color={customColor}
        />
        <HexColorInput
          tabIndex={isToolbarActive ? 0 : -1}
          color={customColor.toUpperCase()}
          onChange={chooseCustomColor}
          prefixed
        />
      </CustomColorInput>
    </CustomColorWrapper>
  );
}

const CustomColorWrapper = styled.div`
  grid-area: custom-color;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 20rem;

  & > .react-colorful {
    height: 13rem;
  }
`;

const CustomColorInput = styled.div`
  display: flex;

  & > input {
    background-color: #f2f5f7;
    border: none;
    box-shadow: 0 0 2px 0 hsl(0deg 0% 7%);
    font-size: 1.6rem;
    padding: 0.4rem 1.2rem;
    margin-left: 0.8rem;
    width: 100%;
    border-radius: 4px;
  }
`;

interface CustomColorButtonProps {
  isInFocus: boolean;
  color: string;
}

const CustomColorButton = styled.button<CustomColorButtonProps>`
  width: 3rem;
  background-color: ${(p) => p.color};
  box-shadow: 0 0 2px 0 hsl(0deg 0% 7%) ${(p) => p.isInFocus && ', 0 0 0 6px hsl(242, 22%, 80%)'};
  border-radius: 4px;
  border: 5px solid #f2f5f7;
`;

export default CustomColor;
