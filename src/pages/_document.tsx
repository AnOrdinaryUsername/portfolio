import Document, { Head, Html, Main, NextScript } from 'next/document';
import { THEME } from '../constants';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

function setColorsByTheme() {
  const colors = '🌈';
  let colorMode: string;
  const hasColorModePreference = window.localStorage.getItem('color-mode') ?? 'dark';

  if (hasColorModePreference) {
    colorMode = hasColorModePreference;
  } else {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  const root = document.documentElement;

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--${name}`;

    // @ts-ignore: Unreachable code error
    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

export function MagicScriptTag() {
  const boundFn = String(setColorsByTheme).replace("'🌈'", JSON.stringify(THEME.colors));

  let calledFunction = `(${boundFn})()`;

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
}

export default MyDocument;
