import { primaryButtonStyles, sharedButtonStyles, tertiaryButtonStyles } from 'components/Buttons';
import Metadata from 'components/Metadata';
import { HollowDots } from 'components/Svgs/Background';
import Image from 'next/image';
import * as React from 'react';
import styled from 'styled-components';
import heroImage from '../../public/images/hero-image.png';

interface HeroProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Hero({ handleClick }: HeroProps) {
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
            <ShowResume href="resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </ShowResume>
            <ContactButton onClick={handleClick}>Send me a message</ContactButton>
          </ButtonWrapper>
        </Introduction>
        <ImageWrapper>
          <Image src={heroImage} alt="" placeholder="blur" />
        </ImageWrapper>
      </Header>
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 70rem;
  height: 90vh;

  @media ${(p) => p.theme.breakpoints.sm} {
    min-height: 60rem;
    max-height: 80rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    align-items: flex-start;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    margin-top: 14.4rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    flex-direction: row;
    align-items: center;
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
  padding-top: 3.2rem;
  padding-bottom: 2.4rem;
  line-height: 1.4;

  @media ${(p) => p.theme.breakpoints.med} {
    font-size: 2.4rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    max-width: 35rem;
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: none;
  justify-items: start;

  @media ${(p) => p.theme.breakpoints.sm} {
    gap: 1.2rem;
  }
`;

const ShowResume = styled.a`
  ${sharedButtonStyles}
  ${primaryButtonStyles}
  line-height: 0;
`;

const ContactButton = styled.button`
  ${tertiaryButtonStyles}
  ${sharedButtonStyles}
`;

const JobTitle = styled.span`
  color: var(--accent-tertiary);
`;

const ImageWrapper = styled.div`
  display: none;

  @media ${(p) => p.theme.breakpoints.sm} {
    display: block;
  }
`;

export default Hero;
