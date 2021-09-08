import * as React from 'react';
import styled from 'styled-components';

interface DialogOptionsProps {
  children: React.ReactNode;
}

function DialogOptions({ children }: DialogOptionsProps) {
  return <Options>{children}</Options>;
}

const Options = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  width: 100%;
  padding: 2rem;
  background: var(--bg-primary);
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;

  & > *:nth-child(2) {
    margin-bottom: 1.6rem;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
    padding: 2.4rem 4rem;

    & > *:first-child {
      margin-right: 1.6rem;
    }

    & > *:nth-child(2) {
      margin-bottom: 0;
    }
  }
`;

export default DialogOptions;
