import * as React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps, sharedButtonStyles } from './shared';

function PrimaryButton({ children, size = 'md', ...props }: ButtonProps) {
  return <Primary {...props}>{children}</Primary>;
}

export const primaryButtonStyles = css`
  background-color: var(--primary-button-bg);
  color: var(--primary-button-fg);
  padding: 1.5rem 2rem;
`;

const Primary = styled.button`
  ${sharedButtonStyles}
  ${primaryButtonStyles}
`;

export default PrimaryButton;
