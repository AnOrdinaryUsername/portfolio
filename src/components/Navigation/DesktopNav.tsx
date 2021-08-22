import { Logo, Menu } from 'components/Svgs/Icons';
import VisuallyHidden from 'components/VisuallyHidden';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import links from './links';
import NavItem from './NavItem';

interface DesktopNavProps {
  isExpanded: boolean;
  ariaControls: string;
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  isSmallerThanDesktop: boolean;
}

const DynamicDarkModeButton = dynamic(() => import('./DarkModeButton'), { ssr: false });

function DesktopNav({ isExpanded, ariaControls, toggleMenu, isSmallerThanDesktop }: DesktopNavProps) {
  const logoHeight = isSmallerThanDesktop ? '40' : '45';

  const smallNav = (
    <OpenMenuButton onClick={toggleMenu} aria-controls={ariaControls} aria-expanded={isExpanded} aria-label="Open menu">
      <Menu height="40" />
    </OpenMenuButton>
  );

  const desktopNav = (
    <Wrapper>
      <Nav>
        <List>
          {links.map((props, index) => (
            <NavItem {...props} key={index} />
          ))}
        </List>
      </Nav>
      <DynamicDarkModeButton />
    </Wrapper>
  );

  const nav = isSmallerThanDesktop ? smallNav : desktopNav;

  return (
    <HeaderWrapper>
      <Header>
        <Link href="/" passHref={true}>
          <LogoAnchor>
            <VisuallyHidden text="Homepage" />
            <Logo height={logoHeight} />
          </LogoAnchor>
        </Link>
        {nav}
      </Header>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  padding: 3.2rem;
  padding-bottom: 0;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding-left: 9.6rem;
    padding-right: 9.6rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    padding-left: 6.4rem;
    padding-right: 6.4rem;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const OpenMenuButton = styled.button`
  line-height: 0;
`;

const LogoAnchor = styled.a`
  line-height: 0;
`;

const Nav = styled.nav`
  display: flex;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  font-weight: 500;

  & > li:not(:last-child) {
    margin: 0 0.8rem;
  }
`;

export default DesktopNav;
