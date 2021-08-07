import { ExternalLink, GithubLogo } from 'components/Svgs/Icons';
import Image, { ImageProps } from 'next/image';
import styled, { css } from 'styled-components';
import showWaifu from '../../public/images/showcase.gif';
import theElements from '../../public/images/the-elements.png';
import { NORD_THEME } from '../constants';

const projects: Array<ProjectCardData> = [
  {
    image: {
      src: showWaifu,
      alt: 'Using the CLI app in a terminal',
      layout: 'fill',
      objectFit: 'cover',
      objectPosition: 'left',
    },
    name: 'show-waifu',
    year: '2021',
    technologies: 'Rust and viuer on terminal',
    description:
      'A command-line interface app using the Danbooru ' +
      'and Safebooru API to display anime fanart in your terminal.',
    repoLink: 'https://github.com/AnOrdinaryUsername/Shopping-Cart/',
    websiteLink: 'https://anordinaryusername.github.io/Shopping-Cart/#/',
  },
  {
    image: {
      src: theElements,
      alt: 'The landing page of The Elements',
    },
    name: 'The Elements',
    year: '2021',
    technologies: 'React, TypeScript, and react-router',
    description:
      'Your one-stop shop for Scalable Vector ' + 'Graphics. Made with lots and lots of love.',
    repoLink: 'https://github.com/AnOrdinaryUsername/show-waifu',
    websiteLink: 'https://crates.io/crates/show-waifu',
  },
];

function ProjectsShowcase() {
  return (
    <Section>
      <Heading>Projects</Heading>
      {projects.map((props, index) => (
        <ProjectCard {...props} orderNumber={index} key={index} />
      ))}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 11.2rem;

  & > *:last-child {
    margin-top: 9.6rem;
  }
`;

const Heading = styled.h2`
  align-self: center;
  margin-bottom: 4.8rem;
`;

interface Order {
  orderNumber: number;
}

interface ProjectCardData {
  image: ImageProps;
  name: string;
  year: string;
  technologies: string;
  description: string;
  repoLink: string;
  websiteLink: string;
}

interface ProjectCardProps extends ProjectCardData, Order {}

function ProjectCard({
  orderNumber,
  image,
  name,
  year,
  technologies,
  description,
  repoLink,
  websiteLink,
}: ProjectCardProps) {
  const isOdd = orderNumber % 2 === 1;

  return (
    <Article isOdd={isOdd}>
      <ImageWrapper>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...image} />
      </ImageWrapper>
      <Placard isOdd={isOdd}>
        <Subheading>
          {name}, <Year dateTime={year}>{year}</Year>
        </Subheading>
        <Technologies>{technologies}</Technologies>
        <Description>{description}</Description>
        <Links>
          <Anchor href={repoLink} target="_blank" rel="noopener noreferrer">
            <GithubLogo height="25" />
            Repository
          </Anchor>
          <Anchor href={websiteLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink height="25" />
            Website
          </Anchor>
        </Links>
      </Placard>
    </Article>
  );
}

interface Reverse {
  isOdd: boolean;
}

const Article = styled.article<Reverse>`
  display: flex;
  flex-direction: ${(p) => (p.isOdd ? 'row-reverse' : 'row')};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 60rem;
  height: 40rem;
  filter: drop-shadow(2px 4px 6px hsl(212, 12%, 15%));
`;

const Placard = styled.div<Reverse>`
  position: relative;
  top: 15%;
  ${(p) =>
    p.isOdd
      ? css`
          left: 3%;
        `
      : css`
          right: 3%;
        `};
  right: 3%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 35rem;
  width: 100%;
  max-width: 55rem;
  padding: 4.8rem;
  border-radius: 6px;
  font-family: Arial, Helvetica;
  background-color: ${NORD_THEME.nord6};
  color: ${NORD_THEME.nord0};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Subheading = styled.h3`
  font-size: 3.6rem;
  font-weight: 700;
  color: ${NORD_THEME.nord0};
`;

const Year = styled.time`
  font-weight: 400;
`;

const Technologies = styled.p`
  font-size: 1.8rem;
  color: hsl(212, 72%, 35%);
  padding-top: 0.8rem;
  padding-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.6rem;
  color: ${NORD_THEME.nord1};
`;

const Links = styled.div`
  display: flex;
  margin-top: auto;

  & > *:nth-child(1) {
    margin-right: 1.6rem;
  }
`;

const Anchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background: lightgray;
  color: ${NORD_THEME.nord3};
  border-radius: 75px;
  background: hsl(225, 55%, 91%);
  max-width: 15rem;
  width: 100%;

  & > *:nth-child(1) {
    margin-right: 0.8rem;
  }
`;

export default ProjectsShowcase;
