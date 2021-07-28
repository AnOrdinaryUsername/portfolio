import * as React from 'react';
import styled from 'styled-components';
import { ButtonProps, sharedButtonStyles } from './shared';

function SecondaryButton({ children, size = 'md' }: ButtonProps) {
  return <Secondary>{children}</Secondary>;
}

const Secondary = styled.button`
  ${sharedButtonStyles}
  background-color: inherit;
  color: var(--secondary-button-fg);
  border: 1px solid var(--secondary-button-border);
  padding: 1.5rem 2rem;
`;

export default SecondaryButton;
