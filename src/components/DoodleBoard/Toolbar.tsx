import { sharedButtonStyles } from 'components/Buttons';
import { ChevronUp } from 'components/Svgs/Icons';
import { useToggle } from 'hooks';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { NORD_THEME } from '../../constants';

function Toolbar() {
  const [isToolbarActive, setIsToolbarActive] = useToggle();
  return (
    <Wrapper isToolbarActive={isToolbarActive}>
      <Flap>
        <RevealToolbarButton
          aria-label={isToolbarActive ? 'Hide toolbar' : 'Reveal toolbar'}
          onClick={setIsToolbarActive}
        >
          <ChevronUp height="50" />
        </RevealToolbarButton>
      </Flap>
      <div>
        <p>test</p>
      </div>
    </Wrapper>
  );
}

interface WrapperProps {
  isToolbarActive: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  z-index: 1;
  max-width: 50rem;
  min-height: 30rem;
  width: 100%;
  transform: translateY(0%);
  margin: 0 auto;
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
      transform: translateY(-100%);
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

export default Toolbar;
