import { Logo } from 'components/Svgs/Icons';
import VisuallyHidden from 'components/VisuallyHidden';
import Link from 'next/link';
import * as React from 'react';
import { Menu } from 'react-feather';
import styled from 'styled-components';
import DarkModeButton from './DarkModeButton';
import links from './links';
import NavItem from './NavItem';

interface DesktopNavProps {
  isExpanded: boolean;
  ariaControls: string;
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
}

function DesktopNav({ isExpanded, ariaControls, toggleMenu }: DesktopNavProps) {
  const smallNav = (
    <OpenMenuButton
      onClick={toggleMenu}
      aria-controls={ariaControls}
      aria-expanded={isExpanded}
      aria-label="Open menu"
    >
      <Menu size="40" />
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
      <DarkModeButton />
    </Wrapper>
  );

  return (
    <HeaderWrapper>
      <Header>
        <Link href="/" passHref={true}>
          <LogoAnchor>
            <VisuallyHidden text="Homepage" />
            <Logo />
          </LogoAnchor>
        </Link>
        {desktopNav}
        {smallNav}
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
  display: none;

  @media ${(p) => p.theme.breakpoints.med} {
    display: flex;
    align-items: center;

    & > button {
      margin-left: 3.2rem;
    }
  }
`;

const OpenMenuButton = styled.button`
  display: initial;
  line-height: 0;

  @media ${(p) => p.theme.breakpoints.med} {
    display: none;
  }
`;

export const LogoAnchor = styled.a`
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
