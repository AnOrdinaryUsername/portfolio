import Head from 'next/head';

type MetadataProps = {
  meta?: HeadContent;
};

export interface HeadContent {
  title?: string;
  description?: string;
  image?: OGImageAttributes;
}

interface OGImageAttributes {
  alt: string;
  path: string;
  width: string;
  height: string;
}

function Metadata({ meta }: MetadataProps) {
  const defaults: HeadContent = {
    title: 'Kyle Masa',
    description: 'A front-end developer that loves to make things pretty.',
    image: {
      alt: 'Logo for portfolio',
      path: '/images/logo.png',
      width: '278',
      height: '241',
    },
  };

  const pageTitle = meta?.title ?? defaults.title;
  const metaDescription = meta?.description ?? defaults.description;
  const siteImage = {
    alt: meta?.image?.alt ?? defaults.image!.alt,
    path: meta?.image?.path ?? defaults.image!.path,
    width: meta?.image?.width ?? defaults.image!.width,
    height: meta?.image?.height ?? defaults.image!.height,
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={siteImage.path} />
      <meta property="og:image:alt" content={siteImage.alt} />
      <meta property="og:image:width" content={siteImage.width} />
      <meta property="og:image:height" content={siteImage.height} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={siteImage.path} />
    </Head>
  );
}

export default Metadata;
