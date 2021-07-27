import Metadata from 'components/Metadata';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function NotFound() {
  const pagePath = useRouter().asPath;

  return (
    <>
      <Metadata title="404 | Not Found" />
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
  padding: 2rem 3.2rem;
  height: 100%;
  text-align: center;
`;

const StatusCode = styled.h1`
  font-size: 6.4rem;
  font-weight: 700;
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
  font-size: 3.2rem;
  line-height: 1.4;
  padding-top: 1.6rem;
`;

export default NotFound;
