import * as React from 'react';
import styled from 'styled-components';
import { ButtonProps, sharedButtonStyles } from './shared';

function PrimaryButton({ children, size = 'md' }: ButtonProps) {
  return <Primary>{children}</Primary>;
}

const Primary = styled.button`
  ${sharedButtonStyles}
  background-color: var(--primary-button-bg);
  color: var(--primary-button-fg);
  padding: 1.5rem 2rem;
`;

export default PrimaryButton;
