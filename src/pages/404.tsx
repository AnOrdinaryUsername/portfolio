import MainLayout from 'components/Layout';
import type { HeadContent } from 'components/Metadata';
import Metadata from 'components/Metadata';
import { useRouter } from 'next/router';
import styled from 'styled-components';

NotFound.layout = MainLayout;

function NotFound() {
  const pagePath = useRouter().asPath;

  const head: HeadContent = {
    title: '404 | Not Found',
  };

  return (
    <>
      <Metadata meta={head} />
      <Header>
        <StatusCode>
          <Number>404</Number> | <Message>Not Found</Message>
        </StatusCode>
        <Description>
          Sorry, the page <code>{pagePath}</code> does not exist.
        </Description>
      </Header>
    </>
  );
}

const Header = styled.header`
  display: grid;
  place-content: center;
  height: 100%;
  min-height: 50rem;
  text-align: center;
`;

const StatusCode = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;

  @media ${(p) => p.theme.breakpoints.med} {
    font-size: 6.4rem;
  }
`;

const Number = styled.span`
  color: var(--accent-primary);
`;

const Message = styled.span`
  color: var(--accent-secondary);
`;

const Description = styled.p`
  max-width: 65ch;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.4;
  padding-top: 1.6rem;

  @media ${(p) => p.theme.breakpoints.med} {
    font-size: 3.2rem;
  }
`;

export default NotFound;
