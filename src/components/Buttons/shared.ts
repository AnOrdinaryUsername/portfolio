import * as React from 'react';
import { css } from 'styled-components';

export interface ButtonProps {
  children: React.ReactNode | string;
  size?: 'sm' | 'md' | 'lg';
}

export const sharedButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 6px;
`;

// TODO: Add shared button sizes
