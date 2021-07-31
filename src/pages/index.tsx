import AboutMe from 'components/AboutMe';
import Hero from 'components/Hero';
import Metadata from 'components/Metadata';

function Home() {
  return (
    <>
      <Metadata />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
}

export default Home;
