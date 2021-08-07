import AboutMe from 'components/AboutMe';
import ContactMe from 'components/ContactMe';
import Hero from 'components/Hero';
import Metadata from 'components/Metadata';
import ProjectsShowcase from 'components/ProjectsShowcase';

function Home() {
  return (
    <>
      <Metadata />
      <main>
        <Hero />
        <AboutMe />
        <ProjectsShowcase />
        <ContactMe />
      </main>
    </>
  );
}

export default Home;
