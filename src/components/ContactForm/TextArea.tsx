import * as React from 'react';
import styled from 'styled-components';
import type { LabelProps } from './shared';
import { formFieldStyles, Wrapper } from './shared';

interface TextAreaProps extends LabelProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

function TextArea({ labelName, identifier, ...props }: TextAreaProps) {
  return (
    <Wrapper>
      <label htmlFor={identifier}>{labelName}</label>
      <TextAreaField id={identifier} {...props} />
    </Wrapper>
  );
}

const TextAreaField = styled.textarea`
  ${formFieldStyles}
  font-family: inherit;
  height: 12rem;
  padding: 0.8rem 1.4rem;
`;

export default TextArea;
