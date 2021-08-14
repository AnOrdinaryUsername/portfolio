import * as React from 'react';
import styled, { css } from 'styled-components';
import type { ButtonProps } from './shared';
import { sharedButtonStyles } from './shared';

function SecondaryButton({ children, size = 'md', ...props }: ButtonProps) {
  return <Secondary {...props}>{children}</Secondary>;
}

export const secondaryButtonStyles = css`
  background-color: inherit;
  color: var(--secondary-button-fg);
  border: 1px solid var(--secondary-button-border);
  padding: 1.5rem 2rem;
`;

const Secondary = styled.button`
  ${sharedButtonStyles}
  ${secondaryButtonStyles}
`;

export default SecondaryButton;
