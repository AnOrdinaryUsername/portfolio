import { Close } from 'components/Svgs/Icons';
import dynamic from 'next/dynamic';
import * as React from 'react';
import styled from 'styled-components';
import links from './links';
import NavItem from './NavItem';

interface MobileNavProps {
  isActive: boolean;
  toggleMenu?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

const DynamicDarkModeButton = dynamic(() => import('./DarkModeButton'), { ssr: false });

function MobileNav({ isActive, toggleMenu }: MobileNavProps) {
  return (
    <div>
      <Overlay onClick={toggleMenu} isActive={isActive} />
      <Wrapper isActive={isActive}>
        <CloseMenuButton aria-label="Close menu" onClick={toggleMenu}>
          <Close height="40" />
        </CloseMenuButton>
        <Nav>
          <List>
            {links.map((props, index) => (
              <NavItem {...props} key={index} />
            ))}
          </List>
        </Nav>
        <DynamicDarkModeButton />
      </Wrapper>
    </div>
  );
}

export const Wrapper = styled.div<MobileNavProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.6rem 3.2rem;
  max-width: 30rem;
  width: 100%;
  height: 100%;
  font-size: 2.4rem;
  background: var(--mobile-nav-bg);
  box-shadow: -2px 0 1px var(--mobile-nav-shadow);
  transition: ${(p) =>
    p.isActive
      ? 'transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      : 'transform 250ms cubic-bezier(0.4, 0.0, 1, 1)'};
  transform: ${(p) => (p.isActive ? 'translatex(0)' : 'translateX(100%)')};
`;

const Overlay = styled.div<MobileNavProps>`
  height: 100%;
  width: 100%;
  backdrop-filter: ${(p) => (p.isActive ? 'blur(8px)' : 'none')};
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
  padding: 1.6rem 0;
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