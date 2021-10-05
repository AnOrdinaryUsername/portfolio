import Footer from 'components/Footer';
import DesktopNav from 'components/Navigation/DesktopNav';
import MobileNav from 'components/Navigation/MobileNav';
import { useToggle } from 'hooks';
import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useToggle();
  const id = 'navigation';

  React.useEffect(() => {
    if (isMobileNavOpen) {
      window.scrollTo(0, 0);
    }
  }, [isMobileNavOpen]);

  return (
    <>
      <GlobalStyle isMobileNavOpen={isMobileNavOpen} />
      <DesktopNav ariaControls={id} isExpanded={isMobileNavOpen} toggleMenu={setIsMobileNavOpen} />
      <Layout>{children}</Layout>
      <Footer />
      <MobileNav id={id} toggleMenu={setIsMobileNavOpen} isActive={isMobileNavOpen} />
    </>
  );
}

interface GlobalStylesProps {
  isMobileNavOpen: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStylesProps>`
  body {
    overflow: ${(p) => p.isMobileNavOpen && 'hidden'};
  }
`;

const Layout = styled.main`
  min-height: 80vh;
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
