import DoodleBoard from 'components/DoodleBoard';
import Script from 'next/script';

function Doodle() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.2.0/inobounce.min.js"
        strategy="beforeInteractive"
      />
      <main>
        <DoodleBoard />
      </main>
    </>
  );
}

export default Doodle;
