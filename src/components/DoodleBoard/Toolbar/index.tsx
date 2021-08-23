import { sharedButtonStyles } from 'components/Buttons';
import { ArrowLeft, ChevronUp, Eraser, Trash, UndoArrow } from 'components/Svgs/Icons';
import { useToggle, useWindowSize } from 'hooks';
import * as htmlToImage from 'html-to-image';
import * as React from 'react';
import { Download } from 'react-feather';
import styled, { css } from 'styled-components';
import { BREAKPOINT_SIZES, NORD_THEME } from '../../../constants';
import ColorBlocks from './ColorBlocks';
import CustomColor from './CustomColor';
import type { StrokeInputsProps } from './StrokeInputs';
import StrokeInputs from './StrokeInputs';

const TRANSITION_OUT_TIME = 350; // in miliseconds

interface ToolbarProps extends Omit<StrokeInputsProps, 'isToolbarActive'> {
  isDrawing: boolean;
  divRef: React.RefObject<HTMLDivElement>;
  currentColor: string;
  customColor: string;
  goBack: React.MouseEventHandler<HTMLButtonElement>;
  chooseCustomColor: React.Dispatch<React.SetStateAction<string>>;
  deleteDrawing: React.MouseEventHandler<HTMLButtonElement>;
  undoLine: React.MouseEventHandler<HTMLButtonElement>;
  useEraser: React.MouseEventHandler<HTMLButtonElement>;
  changeStrokeColor: React.MouseEventHandler<HTMLButtonElement>;
}

function Toolbar({
  isDrawing,
  divRef,
  currentColor,
  customColor,
  opacity,
  strokeWidth,
  updateStrokeSettings,
  goBack,
  chooseCustomColor,
  useEraser,
  deleteDrawing,
  undoLine,
  changeStrokeColor,
}: ToolbarProps) {
  const downloadRef = React.useRef<HTMLAnchorElement>(null);

  const [isToolbarActive, setIsToolbarActive] = useToggle();
  const [hasTransitionedOut, setHasTransitionedOut] = React.useState<boolean>(true);
  const [colorBoxWithFocus, setColorBoxWithFocus] = React.useState<string>('#2b2b2b');

  const { width } = useWindowSize();
  const isSmallerThanDesktop = width < BREAKPOINT_SIZES.lg;

  const toggleToolbar = () => {
    setIsToolbarActive();

    // Change the CustomColor component's visibility depending on
    // whether or not the toolbar has slided outside of viewport.
    if (!hasTransitionedOut) {
      // After 350ms, change CustomColor visibility to hidden to prevent tabbing.
      setTimeout(() => setHasTransitionedOut(true), TRANSITION_OUT_TIME);
    } else {
      // Changes CustomColor visibility to initial.
      setHasTransitionedOut(false);
    }
  };

  React.useEffect(() => {
    if (colorBoxWithFocus !== currentColor) {
      setColorBoxWithFocus(currentColor);
    }
  }, [currentColor, colorBoxWithFocus, setColorBoxWithFocus]);

  React.useEffect(() => {
    /* When the user isn't drawing, convert the current drawing to
     *  a png and add it to the Download icon's href.
     */
    if (!isDrawing) {
      if (!divRef.current) {
        return;
      }

      htmlToImage
        .toPng(divRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const downloadAnchor = downloadRef.current;
          if (downloadAnchor) {
            downloadAnchor.href = dataUrl;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isDrawing, divRef]);

  return (
    <>
      <BackButton onClick={goBack}>
        <ArrowLeft height="20" />
        Go Back
      </BackButton>
      {isSmallerThanDesktop && (
        <>
          <MobileIconButton align="left" onClick={useEraser} aria-label="Use eraser">
            <Eraser height="30" />
          </MobileIconButton>
          <MobileIconButton align="right" onClick={undoLine} aria-label="Undo last stroke">
            <UndoArrow height="30" />
          </MobileIconButton>
          <CurrentColor color={currentColor} aria-label={`Your current color is ${currentColor}`} />
        </>
      )}
      <Wrapper
        isToolbarActive={isToolbarActive}
        aria-controls="content"
        aria-expanded={isToolbarActive}
        role="toolbar"
      >
        <Flap>
          <RevealToolbarButton
            aria-label={isToolbarActive ? 'Hide toolbar' : 'Reveal toolbar'}
            onClick={toggleToolbar}
          >
            <ChevronUp height="50" />
          </RevealToolbarButton>
        </Flap>
        <Content id="content">
          <ColorBlocks
            isToolbarActive={isToolbarActive}
            colorBoxWithFocus={colorBoxWithFocus}
            changeStrokeColor={changeStrokeColor}
          />
          <CustomColor
            hidden={hasTransitionedOut}
            customColor={customColor}
            chooseCustomColor={chooseCustomColor}
            isToolbarActive={isToolbarActive}
            colorBoxWithFocus={colorBoxWithFocus}
            changeStrokeColor={changeStrokeColor}
          />
          <StrokeInputs
            opacity={opacity}
            strokeWidth={strokeWidth}
            isToolbarActive={isToolbarActive}
            updateStrokeSettings={updateStrokeSettings}
          />
          <ButtonsWrapper>
            <IconButton
              tabIndex={isToolbarActive ? 0 : -1}
              onClick={deleteDrawing}
              aria-label="Delete entire drawing"
            >
              <Trash height="30" />
            </IconButton>
            {!isSmallerThanDesktop && (
              <IconButton
                tabIndex={isToolbarActive ? 0 : -1}
                onClick={undoLine}
                aria-label="Undo last stroke"
              >
                <UndoArrow height="30" />
              </IconButton>
            )}
            <DownloadAnchor
              ref={downloadRef}
              tabIndex={isToolbarActive ? 0 : -1}
              download="drawing.png"
              aria-label="Download your drawing as a png"
            >
              <Download size={30} />
            </DownloadAnchor>
          </ButtonsWrapper>
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
  width: 100%;
  transform: translateY(100%);
  margin: auto;
  margin-bottom: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: hsl(225, 22%, 91%);
  /* Toolbar slides out */
  transition: ${`transform ${TRANSITION_OUT_TIME}ms ease-in`};

  @media ${(p) => p.theme.breakpoints.sm} {
    max-width: 100rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
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
  display: flex;
  padding: 2.4rem;
  padding-bottom: 4.8rem;
  gap: 3.2rem;
  overflow-x: auto;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 4.8rem;
    justify-content: space-around;
    overflow-x: initial;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'colors custom-color inputs buttons';
    justify-items: center;
  }
`;

const ButtonsWrapper = styled.div`
  grid-area: buttons;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 1.2rem;
  width: fit-content;

  @media ${(p) => p.theme.breakpoints.lg} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const BackButton = styled.button`
  ${sharedButtonStyles}
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  padding: 1rem 1.6rem;
  margin: 2.4rem;
  user-select: none;
  color: ${NORD_THEME.nord3};
  background: hsl(225, 22%, 91%);
  border-radius: 75px;

  & > *:first-child {
    align-self: flex-end;
    margin-right: 0.6rem;
  }
`;

const IconButton = styled.button`
  ${sharedButtonStyles}
  width: 6rem;
  height: 6rem;
  color: ${NORD_THEME.nord3};
  background-color: hsl(225, 22%, 81%);
`;

const DownloadAnchor = styled.a`
  ${sharedButtonStyles}
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  color: ${NORD_THEME.nord3};
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

interface CurrentColorProps {
  color: string;
}

const CurrentColor = styled.div<CurrentColorProps>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
  margin: 2.4rem;
  width: 5rem;
  height: 5rem;
  background-color: ${(p) => p.color};
  box-shadow: 0 0 2px 0 hsl(0deg 0% 7%);
  border-radius: 4px;
  border: 7px solid #f2f5f7;
`;

export default Toolbar;
