import { IdentityList, StaircaseDots } from 'components/Svgs/Background';
import Image from 'next/image';
import styled from 'styled-components';
import theThinker from '../../public/images/the-thinker.png';

function AboutMe() {
  return (
    <Section>
      <DonoWall>
        <Heading>{'>  '}whoami</Heading>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.{' '}
        </Description>
        <Description>
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </Description>
      </DonoWall>
      <ImageWrapper>
        <Image
          src={theThinker}
          alt="The thinker sculpture with my GitHub profile picture on it"
          placeholder="blur"
        />
        <BackgroundList />
        <BackgroundDots />
      </ImageWrapper>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.4rem;
  margin-bottom: 9.6rem;
  height: 90vh;

  @media ${(p) => p.theme.breakpoints.med} {
    margin-top: 4.8rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    margin-top: 0;
    flex-direction: row;
  }
`;

const DonoWall = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2.4rem;

  @media ${(p) => p.theme.breakpoints.lg} {
    max-width: 50rem;
    padding-bottom: 0;
    margin-right: 9.6rem;
  }
`;

const Heading = styled.h2`
  color: var(--green);
  padding-bottom: 2.4rem;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.4;
  color: var(--fg-tertiary);
  padding-bottom: 2.8rem;

  @media ${(p) => p.theme.breakpoints.med} {
    font-size: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  align-self: center;
`;

const BackgroundList = styled(IdentityList)`
  position: absolute;
  top: -6%;
  left: 59%;
  z-index: -1;
  opacity: var(--list-opacity);
  width: 50%;

  @media ${(p) => p.theme.breakpoints.sm} {
    top: 1%;
    left: 70%;
    width: auto;
  }
`;

const BackgroundDots = styled(StaircaseDots)`
  position: absolute;
  top: 70%;
  left: -5%;
  z-index: -1;
  opacity: var(--staircase-opacity);
`;

export default AboutMe;
