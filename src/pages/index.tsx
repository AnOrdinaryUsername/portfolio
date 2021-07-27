import Metadata from 'components/Metadata';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Metadata />
      <Header>
        <Introduction>
          <Heading>
            <Greeting>Hiya, I&apos;m</Greeting>
            <Name>Kyle Masa</Name>
          </Heading>
          <Description>
            A <JobTitle>front-end developer</JobTitle> that loves to make things pretty.
          </Description>
        </Introduction>
      </Header>
    </>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  color: var(--fg-primary);
`;

const Greeting = styled.span`
  font-size: 3.2rem;
`;

const Name = styled.span`
  font-size: 6.4rem;
  color: var(--accent-primary);
`;

const Description = styled.p`
  font-size: 2.4rem;
  padding-top: 3.2rem;
  line-height: 1.4;
  max-width: 35rem;
`;

const JobTitle = styled.span`
  color: var(--accent-tertiary);
`;
