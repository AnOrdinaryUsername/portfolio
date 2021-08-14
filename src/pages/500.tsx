import MainLayout from 'components/Layout';
import Metadata from 'components/Metadata';
import styled from 'styled-components';

ServerError.layout = MainLayout;

function ServerError() {
  return (
    <>
      <Metadata title="500 | Server Error" />
      <Header>
        <StatusCode>
          <Number>500</Number> | <Message>Server Error</Message>
        </StatusCode>
        <Description>Oh no!!! The server made a big OOPSIE WOOPSIE!!</Description>
        <Description>Please try again later.</Description>
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

  &:nth-child(3) {
    padding-top: 0.8rem;
  }
`;

export default ServerError;
