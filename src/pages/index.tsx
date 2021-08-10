import AboutMe from 'components/AboutMe';
import ContactMe from 'components/ContactMe';
import Hero from 'components/Hero';
import Metadata from 'components/Metadata';
import ProjectsShowcase from 'components/ProjectShowcase';
import * as React from 'react';

function Home() {
  const formRef = React.useRef<HTMLFormElement>(null);

  function scrollToContactForm() {
    formRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Metadata />
      <Hero scrollToContact={scrollToContactForm} />
      <AboutMe />
      <ProjectsShowcase />
      <ContactMe formRef={formRef} />
    </>
  );
}

export default Home;
