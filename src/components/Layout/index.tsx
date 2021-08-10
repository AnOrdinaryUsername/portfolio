import * as React from 'react';
import styled from 'styled-components';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.main`
  padding-left: 3.2rem;
  padding-right: 3.2rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding-left: 9.6rem;
    padding-right: 9.6rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    padding-left: 6.4rem;
    padding-right: 6.4rem;
  }
`;

export default MainLayout;
