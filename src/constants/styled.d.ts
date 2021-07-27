import {} from 'styled-components';
import { COLORS } from '../constants';

declare module 'styled-components' {
  type Colors = typeof COLORS;
  export interface DefaultTheme {
    breakpoints: {
      sm: string;
      med: string;
      lg: string;
    };
    colors: Colors;
  }
}
