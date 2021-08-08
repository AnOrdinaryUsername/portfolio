import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import projects from './projects';

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

  & > *:last-child {
    margin-top: 6.4rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    margin-bottom: 11.2rem;

    & > *:last-child {
      margin-top: 9.6rem;
    }
  }
`;

const Heading = styled.h2`
  align-self: center;
  margin-bottom: 3.2rem;
`;

export default ProjectsShowcase;
