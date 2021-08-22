import * as React from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import styled from 'styled-components';

interface CustomColorProps {
  hidden: boolean;
  isToolbarActive: boolean;
  colorBoxWithFocus: string;
  customColor: string;
  changeStrokeColor: React.MouseEventHandler<HTMLButtonElement>;
  chooseCustomColor: (newColor: string) => void;
}

function CustomColor({
  hidden,
  isToolbarActive,
  colorBoxWithFocus,
  customColor,
  changeStrokeColor,
  chooseCustomColor,
}: CustomColorProps) {
  return (
    <CustomColorWrapper isHidden={hidden}>
      <HexColorPicker color={customColor} onChange={chooseCustomColor} />
      <CustomColorInput>
        <CustomColorButton
          tabIndex={isToolbarActive ? 0 : -1}
          isInFocus={customColor === colorBoxWithFocus}
          id={customColor}
          onClick={changeStrokeColor}
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

interface Visibility {
  isHidden: boolean;
}

const CustomColorWrapper = styled.div<Visibility>`
  grid-area: custom-color;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 20rem;
  visibility: ${(p) => (p.isHidden ? 'hidden' : 'initial')};

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
