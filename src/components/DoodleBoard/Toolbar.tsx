import { sharedButtonStyles } from 'components/Buttons';
import { ChevronUp, Trash, UndoArrow } from 'components/Svgs/Icons';
import { useToggle, useWindowSize } from 'hooks';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { BREAKPOINT_SIZES, NORD_THEME } from '../../constants';
import ColorPicker from './ColorPicker';
import colors from './colors';
import type { DrawEventHandler } from './shared';

interface ToolbarProps {
  deleteDrawing: React.MouseEventHandler<HTMLButtonElement>;
  undoLine: React.MouseEventHandler<HTMLButtonElement>;
  changeStrokeColor: DrawEventHandler;
}

type ColorBox = string;

function Toolbar({ deleteDrawing, undoLine, changeStrokeColor }: ToolbarProps) {
  const [isToolbarActive, setIsToolbarActive] = useToggle();
  const [colorBoxWithFocus, setColorBoxWithFocus] = React.useState<ColorBox>('#2b2b2b');
  const { width } = useWindowSize();
  const isSmallerThanDesktop = width < BREAKPOINT_SIZES.lg;

  const updateColorAndOutline = (
    event: React.MouseEvent<HTMLDivElement> & React.TouchEvent<HTMLDivElement>
  ) => {
    const selectedBoxColor = event.currentTarget.id;

    if (colorBoxWithFocus !== selectedBoxColor) {
      setColorBoxWithFocus(selectedBoxColor);
      changeStrokeColor(event);
    }
  };

  return (
    <>
      {isSmallerThanDesktop && (
        <>
          <MobileIconButton align="left" onClick={deleteDrawing} aria-label="Delete entire drawing">
            <Trash height="30" />
          </MobileIconButton>
          <MobileIconButton align="right" onClick={undoLine} aria-label="Undo last stroke">
            <UndoArrow height="30" />
          </MobileIconButton>
        </>
      )}
      <Wrapper isToolbarActive={isToolbarActive} role="toolbar">
        <Flap>
          <RevealToolbarButton
            role="tab"
            aria-label={isToolbarActive ? 'Hide toolbar' : 'Reveal toolbar'}
            onClick={setIsToolbarActive}
          >
            <ChevronUp height="50" />
          </RevealToolbarButton>
        </Flap>
        <Content aria-hidden={!isToolbarActive}>
          <ColorsWrapper>
            {colors.map((props, index) => (
              <ColorPicker
                isInFocus={props.hexColorCode === colorBoxWithFocus}
                onSelectColor={updateColorAndOutline}
                {...props}
                key={index}
              />
            ))}
          </ColorsWrapper>
          {!isSmallerThanDesktop && (
            <ButtonsWrapper>
              <IconButton onClick={deleteDrawing} aria-label="Delete entire drawing">
                <Trash height="30" />
              </IconButton>
              <IconButton onClick={undoLine} aria-label="Undo last stroke">
                <UndoArrow height="30" />
              </IconButton>
            </ButtonsWrapper>
          )}
        </Content>
      </Wrapper>
    </>
  );
}

interface WrapperProps {
  isToolbarActive: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  z-index: 100;
  max-width: 50rem;
  max-height: 30rem;
  width: 100%;
  transform: translateY(100%);
  margin: auto;
  margin-bottom: 0;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  background: hsl(225, 22%, 91%);
  /* Toolbar slides out */
  transition: transform 350ms ease-in;

  @media ${(p) => p.theme.breakpoints.lg} {
    max-width: 80rem;
  }

  ${(p) =>
    p.isToolbarActive &&
    css`
      /* Toolbar slides in */
      transition: transform 450ms ease-out;
      transform: translateY(0%);
    `};
`;

const Flap = styled.div`
  position: absolute;
  z-index: 1;
  top: -6rem;
  left: 0;
  right: 0;
  display: grid;
  place-content: center;
  width: 9rem;
  height: 6rem;
  margin: 0 auto;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 1.2rem 2.8rem;
  background: hsl(225, 22%, 91%);
`;

const RevealToolbarButton = styled.button`
  ${sharedButtonStyles}
  color: ${NORD_THEME.nord3};
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'colors buttons'
    'submit submit';
  padding: 2.4rem;
  gap: 3.2rem;
`;

const ColorsWrapper = styled.div`
  grid-area: colors;
  display: grid;
  grid-template-columns: repeat(3, 5rem);
  gap: 1.2rem;
  width: fit-content;
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  gap: 1.2rem;
  width: fit-content;
`;

const IconButton = styled.button`
  ${sharedButtonStyles}
  color: ${NORD_THEME.nord3};
  width: 6rem;
  height: 6rem;
  background-color: hsl(225, 22%, 81%);
`;

interface MobileIconButtonProps {
  align: 'left' | 'right';
}

const MobileIconButton = styled(IconButton)<MobileIconButtonProps>`
  position: absolute;
  bottom: 0;
  z-index: 11;
  margin: 2.4rem;
  margin-bottom: 3.2rem;

  ${(p) =>
    p.align === 'left'
      ? css`
          left: 0;
          margin-left: 3.2rem;
        `
      : css`
          right: 0;
          margin-right: 3.2rem;
        `};
`;

export default Toolbar;
