import { HollowDots } from 'components/BackgroundSvgs';
import { PrimaryButton, TertiaryButton } from 'components/Buttons';
import Metadata from 'components/Metadata';
import Image from 'next/image';
import styled from 'styled-components';
import heroImage from '../../public/images/hero-image.png';

export default function Home() {
  return (
    <>
      <Metadata />
      <Header>
        <Introduction>
          <BackgroundDots />
          <Heading>
            <Greeting>Hiya, I&apos;m</Greeting>
            <Name>Kyle Masa</Name>
          </Heading>
          <Description>
            A <JobTitle>front-end developer</JobTitle> that loves to make things pretty.
          </Description>
          <ButtonWrapper>
            <PrimaryButton>Resume</PrimaryButton>
            <TertiaryButton>View more projects</TertiaryButton>
          </ButtonWrapper>
        </Introduction>
        <Image src={heroImage} alt="" />
      </Header>
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.2rem;
  height: 100%;

  @media ${(p) => p.theme.breakpoints.lg} {
    flex-direction: row;
  }
`;

const Introduction = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  padding-bottom: 4.8rem;

  @media ${(p) => p.theme.breakpoints.lg} {
    padding-bottom: 0;
    padding-right: 3.2rem;
    max-width: 40rem;
    width: 100%;
  }
`;

const BackgroundDots = styled(HollowDots)`
  position: absolute;
  left: -114px;
  top: -65px;
  z-index: -1;
  opacity: var(--hollow-dots-opacity);

  @media ${(p) => p.theme.breakpoints.med} {
    left: -167px;
  }
`;

const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  color: var(--fg-primary);
`;

const Greeting = styled.span`
  font-size: 2.8rem;

  @media ${(p) => p.theme.breakpoints.med} {
    font-size: 3.2rem;
  }
`;

const Name = styled.span`
  font-size: 5.6rem;
  color: var(--accent-primary);

  @media ${(p) => p.theme.breakpoints.med} {
    font-size: 6.4rem;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  padding: 3.2rem 0;
  line-height: 1.4;

  @media ${(p) => p.theme.breakpoints.med} {
    font-size: 2.4rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    max-width: 35rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const JobTitle = styled.span`
  color: var(--accent-tertiary);
`;
