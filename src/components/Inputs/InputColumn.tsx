import * as React from 'react';
import styled from 'styled-components';

interface InputContentProps extends Direction {
  children: React.ReactNode;
}

function InputContent({ type, children }: InputContentProps) {
  return <Wrapper type={type}>{children}</Wrapper>;
}

interface Direction {
  type?: 'row' | 'column';
}

const Wrapper = styled.div<Direction>`
  display: flex;
  flex-direction: ${(p) => p.type ?? 'column'};
  align-items: baseline;
`;

export default InputContent;
