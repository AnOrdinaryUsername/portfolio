import { sharedButtonStyles } from 'components/Buttons';
import * as React from 'react';
import { X } from 'react-feather';
import styled, { css, keyframes } from 'styled-components';

interface DialogProps {
  isOpen: boolean;
  zIndex: number;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

function Dialog({ isOpen, zIndex, onClose, children }: DialogProps) {
  return (
    <Wrapper zIndex={zIndex} reveal={isOpen}>
      <Overlay />
      <DialogBox animate={isOpen} role="alertdialog" aria-hidden={isOpen}>
        <CloseDialogButton onClick={onClose}>
          <X size={40} />
        </CloseDialogButton>
        {children}
      </DialogBox>
    </Wrapper>
  );
}

interface RevealDialog {
  reveal: boolean;
  zIndex: number;
}

const Wrapper = styled.div<RevealDialog>`
  position: fixed;
  inset: 0px;
  overflow: auto;
  display: flex;
  visibility: ${(p) => !p.reveal && 'hidden'};
  align-items: center;
  justify-content: center;
  background: transparent;
  z-index: ${(p) => p.zIndex ?? '1'};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
  background: rgba(14, 16, 18, 0.5);
  backdrop-filter: blur(8px);
`;

const dialogEnter = keyframes`
  from {
      opacity: 0;
      transform: translateY(2rem);
  }
`;

interface Animation {
  animate: boolean;
}

const DialogBox = styled.div<Animation>`
  position: relative;
  z-index: 1;
  background: var(--bg-secondary);
  max-width: 40rem;
  width: 100%;
  margin: 3.2rem;
  border-radius: 8px;
  animation: ${(p) =>
    p.animate &&
    css`
      ${dialogEnter} 300ms cubic-bezier(0.07, 0.7, 0.69, 1.01) calc(1 * 0.05s) 1 backwards
    `};

  @media ${(p) => p.theme.breakpoints.sm} {
    max-width: 60rem;
  }
`;

const CloseDialogButton = styled.button`
  ${sharedButtonStyles}
  position: absolute;
  top: -50px;
  right: 0;
  color: hsl(0, 0%, 100%);
  background: none;
`;

export default Dialog;
