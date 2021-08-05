import AboutMe from 'components/AboutMe';
import ContactMe from 'components/ContactMe';
import Hero from 'components/Hero';
import Metadata from 'components/Metadata';

function Home() {
  return (
    <>
      <Metadata />
      <main>
        <Hero />
        <AboutMe />
        <ContactMe />
      </main>
    </>
  );
}

export default Home;
