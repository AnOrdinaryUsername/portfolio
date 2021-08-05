import * as React from 'react';
import styled from 'styled-components';

interface InputTextProps {
  labelName: string;
  id: string;
  isRequired: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function InputText({ id, isRequired, labelName, value, onChange }: InputTextProps) {
  return (
    <Wrapper>
      <label htmlFor={id}>{labelName}</label>
      <Input
        type="text"
        id={id}
        name={id}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0 0.2rem 0.2rem;
`;

const Input = styled.input`
  background-color: #f2f5f7;
  border: none;
  box-shadow: 0 0 2px 0 hsl(0deg 0% 7%);
  font-size: 1em;
  margin-top: 0.6rem;
  height: 3.8rem;
  border-radius: 0.6rem;
  padding: 0 1.6rem;
  height: 4.8rem;
`;

export default InputText;
