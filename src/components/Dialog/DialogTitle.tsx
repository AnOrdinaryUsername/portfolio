import * as React from 'react';
import styled from 'styled-components';

interface DialogTitleProps {
  title: string;
}

function DialogTitle({ title }: DialogTitleProps) {
  return <Heading>{title}</Heading>;
}

const Heading = styled.h3`
  color: var(--accent-primary);
`;

export default DialogTitle;
