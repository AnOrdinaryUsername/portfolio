import { Logo, Menu } from 'components/Svgs/Icons';
import { useWindowSize } from 'hooks';
import Link from 'next/link';
import styled from 'styled-components';
import { BREAKPOINT_SIZES } from '../../constants';
import DarkModeButton from './DarkModeButton';

const items: Array<NavItemProps> = [
  {
    pageTitle: 'About',
    path: '/about',
  },
  {
    pageTitle: 'Blog',
    path: '/blog',
  },
  {
    pageTitle: 'Projects',
    path: '/projects',
  },
  {
    pageTitle: 'Doodle',
    path: '/doodle',
  },
];

function Navigation() {
  const { width } = useWindowSize();
  const isSmallerThanDesktop = width < BREAKPOINT_SIZES.med;
  const logoHeight = isSmallerThanDesktop ? '40' : '45';

  const smallNav = <Menu height="48" />;

  const desktopNav = (
    <DesktopNav>
      <Nav>
        <List>
          {items.map((props, index) => (
            <NavItem {...props} key={index} />
          ))}
        </List>
      </Nav>
      <DarkModeButton />
    </DesktopNav>
  );

  const nav = isSmallerThanDesktop ? smallNav : desktopNav;

  return (
    <Header>
      <Link href="/" passHref={true}>
        <LogoAnchor>
          <Logo height={logoHeight} />
        </LogoAnchor>
      </Link>
      {nav}
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
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

interface NavItemProps {
  pageTitle: string;
  path: string;
}

function NavItem({ pageTitle, path }: NavItemProps) {
  return (
    <>
      <li>
        <Link href={path} passHref={true}>
          <Anchor>{pageTitle}</Anchor>
        </Link>
      </li>
    </>
  );
}

const Anchor = styled.a`
  padding: 1.2rem;
  border-radius: 6px;

  &:hover {
    background-color: var(--bg-secondary);
  }
`;

export default Navigation;
