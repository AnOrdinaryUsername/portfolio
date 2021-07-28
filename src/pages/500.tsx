import Metadata from 'components/Metadata';
import styled from 'styled-components';

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

  &:nth-child(3) {
    padding-top: 0.8rem;
  }
`;

export default ServerError;