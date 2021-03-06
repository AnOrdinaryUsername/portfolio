import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

export interface FooterColumnProps {
  columnName: string;
  links: Array<AnchorLinkProps>;
}

function FooterColumn({ columnName, links }: FooterColumnProps) {
  return (
    <Wrapper>
      <Title>{columnName}</Title>
      <Links>
        {links.map((props, index) => (
          <AnchorLink {...props} key={index} />
        ))}
      </Links>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 1.6rem;

  @media ${(p) => p.theme.breakpoints.med} {
    margin: 0 1.4rem;
  }
`;

const Title = styled.p`
  margin-bottom: 1.2rem;
  color: var(--accent-primary);
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
`;

interface AnchorLinkProps {
  pagePath: string;
  pageName: string;
}

function AnchorLink({ pagePath, pageName }: AnchorLinkProps) {
  return (
    <Link href={pagePath} passHref={true}>
      <Page>{pageName}</Page>
    </Link>
  );
}

const Page = styled.a`
  position: relative;
  padding: 0.4rem 0;
  color: var(--fg-primary);

  @media ${(p) => p.theme.breakpoints.med} {
    width: min-content;
  }

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-secondary);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export default FooterColumn;
