import DoodleBoard from 'components/DoodleBoard';
import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

function Doodle() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <DoodleBoard />
      </Main>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`;

const Main = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

export default Doodle;
