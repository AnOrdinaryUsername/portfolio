/* eslint-disable jsx-a11y/alt-text */
import { ExternalLink, GithubLogo } from 'components/Svgs/Icons';
import { useWindowSize } from 'hooks';
import Image, { ImageProps } from 'next/image';
import styled, { css } from 'styled-components';
import { BREAKPOINT_SIZES, NORD_THEME } from '../../constants';

interface Order {
  orderNumber: number;
}

export interface ProjectCardData {
  image: {
    desktop: ImageProps;
    mobile: ImageProps;
  };
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
  const { width } = useWindowSize();
  const isDesktop = width >= BREAKPOINT_SIZES.lg;
  const isMobilePhone = width < BREAKPOINT_SIZES.sm;
  const isOdd = orderNumber % 2 === 1;

  return (
    <Article isOdd={isOdd}>
      {isDesktop && (
        <DesktopImageWrapper>
          <Image {...image.desktop} />
        </DesktopImageWrapper>
      )}
      <Placard isOdd={isOdd}>
        {!isDesktop && <Image {...image.mobile} />}
        <PlacardDetails>
          <Subheading>
            {name}, <Year dateTime={year}>{year}</Year>
          </Subheading>
          <Technologies>{technologies}</Technologies>
          <Description>{description}</Description>
          <Links>
            {!isMobilePhone ? (
              <>
                <Anchor href={repoLink} target="_blank" rel="noopener noreferrer">
                  <GithubLogo fillColor="#181616" height="25" />
                  Repository
                </Anchor>
                <Anchor href={websiteLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink height="25" />
                  Website
                </Anchor>
              </>
            ) : (
              <>
                <MobileAnchor
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View the source for ${name}`}
                >
                  <GithubLogo height="30" />
                </MobileAnchor>
                <MobileAnchor
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View the website for ${name}`}
                >
                  <ExternalLink height="30" />
                </MobileAnchor>
              </>
            )}
          </Links>
        </PlacardDetails>
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

const DesktopImageWrapper = styled.div`
  position: absolute;
  width: 30rem;
  height: 20rem;
  filter: var(--project-drop-shadow);

  @media ${(p) => p.theme.breakpoints.sm} {
    width: 45rem;
    height: 30rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    position: relative;
    width: 60rem;
    height: 40rem;
  }
`;

const Placard = styled.div<Reverse>`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 55rem;
  border-radius: 6px;
  font-family: Arial, Helvetica;
  background-color: ${NORD_THEME.nord6};
  color: ${NORD_THEME.nord0};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media ${(p) => p.theme.breakpoints.lg} {
    top: 15%;
    ${(p) =>
      p.isOdd
        ? css`
            left: 3%;
          `
        : css`
            right: 3%;
          `};
    height: 35rem;
  }
`;

const PlacardDetails = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 35rem;
  padding: 3.6rem;

  @media ${(p) => p.theme.breakpoints.med} {
    padding: 4.8rem;
  }
`;

const Subheading = styled.h3`
  color: ${NORD_THEME.nord0};
`;

const Year = styled.time`
  font-size: inherit;
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

// Anchor that looks like a button
const Anchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background: lightgray;
  color: ${NORD_THEME.nord3};
  border-radius: 4px;
  background: hsl(225, 22%, 91%);
  max-width: 15rem;
  width: 100%;
  transition: background 200ms ease-out;

  &:hover {
    transition: background 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background: hsl(225, 22%, 87%);
  }

  & > *:nth-child(1) {
    margin-right: 0.8rem;
  }
`;

// Anchor that only contains an icon
const MobileAnchor = styled.a`
  padding: 1rem;
  line-height: 0;
`;

const Links = styled.div`
  display: flex;
  padding-top: 4rem;
  margin-top: auto;

  /* To move the icon in MobileAnchor slightly to the left for alignment */
  margin-left: -1rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    margin-left: 0;
  }

  & > ${Anchor}:nth-child(1) {
    margin-right: 1.6rem;
  }
`;

export default ProjectCard;
