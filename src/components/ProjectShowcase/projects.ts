import showWaifu from '../../../public/images/show-waifu.gif';
import theElements from '../../../public/images/the-elements.png';
import type { ProjectCardData } from './ProjectCard';

const projects: Array<ProjectCardData> = [
  {
    image: {
      desktop: {
        src: showWaifu,
        alt: 'Using the CLI app in a terminal',
        layout: 'fill',
        objectFit: 'cover',
        objectPosition: 'left',
      },
      mobile: {
        src: showWaifu,
        alt: 'Using the CLI app in a terminal',
      },
    },
    name: 'show-waifu',
    year: '2021',
    technologies: 'Rust and viuer on terminal',
    description:
      'A command-line interface app using the Danbooru ' +
      'and Safebooru API to display anime fanart in your terminal.',
    repoLink: 'https://github.com/AnOrdinaryUsername/show-waifu',
    websiteLink: 'https://crates.io/crates/show-waifu',
  },
  {
    image: {
      desktop: {
        src: theElements,
        alt: 'The landing page of The Elements',
      },
      mobile: {
        src: theElements,
        alt: 'The landing page of The Elements',
      },
    },
    name: 'The Elements',
    year: '2021',
    technologies: 'React, TypeScript, and react-router',
    description:
      'Your one-stop shop for Scalable Vector ' + 'Graphics. Made with lots and lots of love.',
    repoLink: 'https://github.com/AnOrdinaryUsername/Shopping-Cart/',
    websiteLink: 'https://anordinaryusername.github.io/Shopping-Cart/#/',
  },
];

export default projects;
