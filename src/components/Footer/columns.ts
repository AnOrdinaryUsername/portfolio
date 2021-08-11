import { FooterColumnProps } from './FooterColumn';

const columns: Array<FooterColumnProps> = [
  {
    columnName: 'Blog Topics',
    links: [
      {
        pageName: 'Programming',
        pagePath: '/blog/programming',
      },
      {
        pageName: 'Food',
        pagePath: '/blog/food',
      },
      {
        pageName: 'Random',
        pagePath: '/blog/random',
      },
    ],
  },
  {
    columnName: 'Other',
    links: [
      {
        pageName: 'About',
        pagePath: '/about',
      },
      {
        pageName: 'Projects',
        pagePath: '/projects',
      },
      {
        pageName: 'Doodle',
        pagePath: '/doodle',
      },
    ],
  },
];

export default columns;
