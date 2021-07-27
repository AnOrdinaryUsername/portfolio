import Head from 'next/head';

interface MetadataProps {
  title?: string;
  metaDescription?: string;
  image?: {
    alt: string;
    path: string;
    width: string;
    height: string;
  };
}

function Metadata({ title, metaDescription, image }: MetadataProps) {
  const defaults = {
    title: 'Kyle Masa',
    metaDescription: 'A front-end developer that loves to make things pretty.',
    image: {
      alt: 'Logo for portfolio',
      path: '/images/logo.png',
      width: '278',
      height: '241',
    },
  };

  const pageTitle = title || defaults.title;
  const description = metaDescription || defaults.metaDescription;
  const siteImage = {
    alt: image?.alt || defaults.image.alt,
    path: image?.path || defaults.image.path,
    width: image?.width || defaults.image.width,
    height: image?.height || defaults.image.height,
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={siteImage.path} />
      <meta property="og:image:alt" content={siteImage.alt} />
      <meta property="og:image:width" content={siteImage.width} />
      <meta property="og:image:height" content={siteImage.height} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteImage.path} />
    </Head>
  );
}

export default Metadata;
