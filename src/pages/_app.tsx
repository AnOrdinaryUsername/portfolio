import Footer from 'components/Footer';
import MainLayout from 'components/Layout';
import DesktopNav from 'components/Navigation/DesktopNav';
import MobileNav from 'components/Navigation/MobileNav';
import { useToggle, useWindowSize } from 'hooks';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BREAKPOINT_SIZES, THEME } from '../constants';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useToggle();
  const { width } = useWindowSize();
  const isSmallerThanDesktop = width < BREAKPOINT_SIZES.med;

  React.useEffect(() => {
    if (isMobileNavOpen) {
      window.scrollTo(0, 0);
    }
  }, [isMobileNavOpen]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2e3440" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#2e3440" />
      </Head>
      <ThemeProvider theme={THEME}>
        <GlobalStyles isMobileNavOpen={isMobileNavOpen} />
        <DesktopNav toggleMenu={setIsMobileNavOpen} isSmallerThanDesktop={isSmallerThanDesktop} />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <Footer />
        {isSmallerThanDesktop && (
          <MobileNav toggleMenu={setIsMobileNavOpen} isActive={isMobileNavOpen} />
        )}
      </ThemeProvider>
    </>
  );
}

interface GlobalStylesProps {
  isMobileNavOpen: boolean;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* ------------ End of CSS Reset ------------ */

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    @media screen and (prefers-reduced-motion: reduce), (update: slow) {
        *,
        *::before,
        *::after {
            animation-duration: 0s !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
            animation-delay: 0s !important;
        }
    }

    *:focus:not(:focus-visible) {
        outline: none;
    }

    *:focus-visible {
        outline: 2px auto red;
    }

    html {
        background-color: var(--bg-primary);
        color: var(--fg-primary);
        display: flex;
        font-size: 62.5%;
        min-height: 100%;
        transition: color 300ms, background-color 300ms;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        display: flex;
        flex: 1;
        flex-direction: column;
        font: 16px/1.65 Rubik, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        font-size: 1.6em;
        line-height: 1.6;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        overflow: ${(p) => p.isMobileNavOpen && 'hidden'};
    }

    body::-webkit-scrollbar {
        background-color: var(--bg-secondary);
        width: 1.6rem;
    }

    body::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 3px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--accent-tertiary);
        border-radius: 6px;
    }

    button {
        appearance: none;
        background-color: inherit;
        border: none;
        color: inherit;
        cursor: pointer;
        font-family: inherit;
        font-size: inherit;
        line-height: normal;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        background-color: var(--bg-tertiary);
        border-radius: 6px;
        padding: 0 0.8rem;
    }

    em {
        font-style: italic;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: var(--fg-primary);
        line-height: 1.2;
    }

    h2 {
        font-size: 3.2rem;
        font-weight: 700;

        @media ${(p) => p.theme.breakpoints.med} {
            font-size: 4.8rem;
        }
    }

    h3 {
        font-size: 2.4rem;
        font-weight: 700;

        @media ${(p) => p.theme.breakpoints.med} {
            font-size: 3.6rem;
        }
    }

    header, section {
        width: 100%;
        max-width: 110rem;
        margin: 0 auto;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    small {
        font-size: smaller;
    }

    strong {
        font-weight: bold;
    }

    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`;

export default MyApp;
