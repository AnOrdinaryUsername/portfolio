import * as React from 'react';
import { X } from 'react-feather';
import styled, { css } from 'styled-components';
import DarkModeButton from './DarkModeButton';
import links from './links';
import NavItem from './NavItem';

interface MobileNavProps {
  id?: string;
  isActive: boolean;
  toggleMenu?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

function MobileNav({ id, isActive, toggleMenu }: MobileNavProps) {
  return (
    <Wrapper>
      <Overlay onClick={toggleMenu} isActive={isActive} />
      <Menu id={id} isActive={isActive}>
        <CloseMenuButton aria-label="Close menu" onClick={toggleMenu}>
          <X size="40" />
        </CloseMenuButton>
        <Nav>
          <List>
            {links.map((props, index) => (
              <NavItem {...props} key={index} />
            ))}
          </List>
        </Nav>
        <DarkModeButton />
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;

  @media ${(p) => p.theme.breakpoints.med} {
    display: none;
  }
`;

export const Menu = styled.div<MobileNavProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3.2rem;
  max-width: 30rem;
  width: 100%;
  height: 100%;
  font-size: 2.4rem;
  background: var(--mobile-nav-bg);
  box-shadow: -2px 0 1px var(--mobile-nav-shadow);
  transition: transform 250ms cubic-bezier(0.4, 0, 1, 1);
  transform: translateX(100%);

  ${(p) =>
    p.isActive &&
    css`
      transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateX(0);
    `};
`;

const Overlay = styled.div<MobileNavProps>`
  height: 100%;
  width: 100%;
  backdrop-filter: ${(p) => p.isActive && 'blur(8px)'};
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(p) => (p.isActive ? '0' : '-1')};
`;

const CloseMenuButton = styled.button`
  align-self: flex-end;
  line-height: 0;
`;

const Nav = styled.nav`
  padding: 0.8rem 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  font-weight: 500;

  & > li {
    margin: 1.2rem 0;
  }
`;

export default MobileNav;
