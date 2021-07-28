import * as React from 'react';
import styled from 'styled-components';
import { ButtonProps, sharedButtonStyles } from './shared';

function TertiaryButton({ children, size = 'md' }: ButtonProps) {
  return <Tertiary>{children}</Tertiary>;
}

const Tertiary = styled.button`
  ${sharedButtonStyles}
  background-color: inherit;
  color: var(--tertiary-button-fg);
  text-decoration-line: underline;
  text-underline-offset: 4px;
  padding: 1.5rem 2rem;
`;

export default TertiaryButton;
