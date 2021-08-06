import * as React from 'react';
import styled from 'styled-components';
import { formFieldStyles, LabelProps, Wrapper } from './shared';

interface InputTextProps extends LabelProps, React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ identifier, labelName, ...props }: InputTextProps) {
  return (
    <Wrapper>
      <label htmlFor={identifier}>{labelName}</label>
      <InputField id={identifier} {...props} />
    </Wrapper>
  );
}

const InputField = styled.input`
  ${formFieldStyles};
  height: 3.6rem;
  padding: 0 1.4rem;
`;

export default Input;
