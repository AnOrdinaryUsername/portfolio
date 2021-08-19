import * as React from 'react';
import styled from 'styled-components';

interface DialogTextProps {
  children: React.ReactNode;
}

function DialogText({ children }: DialogTextProps) {
  return <Description>{children}</Description>;
}

const Description = styled.p`
  font-size: 1.6rem;
  color: var(--fg-tertiary);

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;

export default DialogText;
