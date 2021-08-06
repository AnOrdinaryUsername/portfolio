import * as React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps, sharedButtonStyles } from './shared';

function TertiaryButton({ children, size = 'md', ...props }: ButtonProps) {
  return <Tertiary {...props}>{children}</Tertiary>;
}

export const tertiaryButtonStyles = css`
  background-color: inherit;
  color: var(--tertiary-button-fg);
  text-decoration-line: underline;
  text-underline-offset: 4px;
  padding: 1.5rem 2rem;
`;

const Tertiary = styled.button`
  ${sharedButtonStyles}
  ${tertiaryButtonStyles}
`;

export default TertiaryButton;
