import type { DefaultTheme } from 'styled-components';

export const BREAKPOINT_SIZES = {
  sm: 576,
  med: 768,
  lg: 992,
};

/**
 *  Mobile first responsive breakpoints based on Bootstrap.
 *  https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
 */
export const BREAKPOINTS = {
  sm: `(min-width: ${BREAKPOINT_SIZES.sm}px)`,
  med: `(min-width: ${BREAKPOINT_SIZES.med}px)`,
  lg: `(min-width: ${BREAKPOINT_SIZES.lg}px)`,
};

/**
 * Colors from Nord theme
 * https://www.nordtheme.com/docs/colors-and-palettes
 */
export const NORD_THEME = {
  nord0: '#2E3440',
  nord1: '#3B4252',
  nord2: '#434C5E',
  nord3: '#4C566A',
  nord4: '#D8DEE9',
  nord5: '#E5E9F0',
  nord6: '#ECEFF4',
  nord7: '#8FBCBB',
  nord8: '#88C0D0',
  nord9: '#81A1C1',
  nord10: '#5E81AC',
  nord14: '#A3BE8C',
};

export interface ColorMode {
  [colorName: string]: {
    light: string;
    dark: string;
  };
}

// TODO: Make a sensible light theme
export const COLORS: ColorMode = {
  'bg-primary': {
    light: 'hsl(210, 25%, 97%)',
    dark: NORD_THEME.nord0,
  },
  'bg-secondary': {
    light: 'hsl(208, 66%, 83%)',
    dark: NORD_THEME.nord1,
  },
  'bg-tertiary': {
    light: 'hsl(208, 66%, 95%)',
    dark: NORD_THEME.nord2,
  },
  'bg-quaternary': {
    light: 'hsl(209, 69%, 91%)',
    dark: NORD_THEME.nord3,
  },
  'fg-primary': {
    light: NORD_THEME.nord3,
    dark: NORD_THEME.nord6,
  },
  'fg-secondary': {
    light: '',
    dark: NORD_THEME.nord5,
  },
  'fg-tertiary': {
    light: '',
    dark: NORD_THEME.nord4,
  },
  'accent-primary': {
    light: 'hsl(186, 40%, 53%)',
    dark: NORD_THEME.nord8,
  },
  'accent-secondary': {
    light: NORD_THEME.nord10,
    dark: NORD_THEME.nord7,
  },
  'accent-tertiary': {
    light: 'hsl(213, 39%, 52%)',
    dark: NORD_THEME.nord9,
  },
  'accent-quaternary': {
    light: NORD_THEME.nord10,
    dark: NORD_THEME.nord10,
  },
  green: {
    light: 'hsl(115, 20%, 52%)',
    dark: NORD_THEME.nord14,
  },
  'primary-button-bg': {
    light: NORD_THEME.nord10,
    dark: NORD_THEME.nord7,
  },
  'primary-button-fg': {
    light: 'hsl(0, 0%, 100%)',
    dark: NORD_THEME.nord0,
  },
  'secondary-button-fg': {
    light: NORD_THEME.nord10,
    dark: NORD_THEME.nord6,
  },
  'secondary-button-border': {
    light: NORD_THEME.nord9,
    dark: NORD_THEME.nord4,
  },
  'tertiary-button-fg': {
    light: NORD_THEME.nord10,
    dark: NORD_THEME.nord4,
  },
  'hollow-dots-opacity': {
    light: '0.2',
    dark: '0.8',
  },
  'staircase-opacity': {
    light: '0.6',
    dark: '0.4',
  },
  'list-opacity': {
    light: '0.5',
    dark: '0.4',
  },
  'list-fg': {
    light: NORD_THEME.nord3,
    dark: NORD_THEME.nord4,
  },
  'mobile-nav-bg': {
    light: 'hsl(220, 27%, 98%)',
    dark: 'hsl(221, 16%, 19%)',
  },
  'mobile-nav-shadow': {
    light: 'hsl(0, 0%, 0%, 0.1)',
    dark: 'hsl(219, 17%, 32%, 0.1)',
  },
  'project-drop-shadow': {
    light: 'drop-shadow(0px 0px 2px hsl(212,12%,48%))',
    dark: 'drop-shadow(2px 4px 6px hsl(212,12%,15%))',
  },
  'icon-color': {
    light: NORD_THEME.nord3,
    dark: '#FFFFFF',
  },
};

export const THEME: DefaultTheme = {
  breakpoints: BREAKPOINTS,
  colors: COLORS,
};
