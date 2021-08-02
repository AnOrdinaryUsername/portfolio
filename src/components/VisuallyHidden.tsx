import styled from 'styled-components';

interface VisuallyHiddenProps {
  text: string;
}

function VisuallyHidden({ text }: VisuallyHiddenProps) {
  return <HiddenText>{text}</HiddenText>;
}

const HiddenText = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

export default VisuallyHidden;
