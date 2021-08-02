import Link from 'next/link';
import styled from 'styled-components';

export interface NavItemProps {
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

export default NavItem;
