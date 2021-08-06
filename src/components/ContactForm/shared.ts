import styled, { css } from 'styled-components';

export interface LabelProps {
  labelName: string;
  identifier: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0 0.2rem 0.2rem;
`;

export const formFieldStyles = css`
  background-color: #f2f5f7;
  border: none;
  box-shadow: 0 0 2px 0 hsl(0deg 0% 7%);
  font-size: 1.6rem;
  margin-top: 0.6rem;
  border-radius: 4px;
`;
