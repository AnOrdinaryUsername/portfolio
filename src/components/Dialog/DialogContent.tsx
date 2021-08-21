import * as React from 'react';
import styled from 'styled-components';

interface DialogContentProps {
  children?: React.ReactNode;
}

function DialogContent({ children }: DialogContentProps) {
  return <Info>{children}</Info>;
}

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  padding: 2.4rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 4.8rem;
  }
`;

export default DialogContent;
