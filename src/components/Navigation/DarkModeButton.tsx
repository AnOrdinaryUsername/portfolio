import { Moon, Sun } from 'components/Svgs/Icons';
import * as React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import { Wrapper as DesktopNavWrapper } from './DesktopNav';

function changeColorMode(currentMode: 'dark' | 'light') {
  const root = document.documentElement;

  if (currentMode === 'light') {
    window.localStorage.setItem('color-mode', 'dark');

    Object.entries(COLORS).forEach(([name, colorMode]) => {
      const cssVarName = `--${name}`;

      root.style.setProperty(cssVarName, colorMode['dark']);
    });
  } else {
    window.localStorage.setItem('color-mode', 'light');

    Object.entries(COLORS).forEach(([name, colorMode]) => {
      const cssVarName = `--${name}`;

      root.style.setProperty(cssVarName, colorMode['light']);
    });
  }
}

function DarkModeButton() {
  const initialTheme = window.localStorage.getItem('color-mode') ?? 'dark';
  const mode = initialTheme === 'dark' ? true : false;
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(mode);

  const updateColorMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  React.useEffect(() => {
    const theme = isDarkMode ? 'light' : 'dark';
    changeColorMode(theme);
  }, [isDarkMode]);

  return (
    <Button
      onClick={updateColorMode}
      aria-label={isDarkMode ? 'Activate light mode' : 'Activate dark mode'}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </Button>
  );
}

const Button = styled.button`
  line-height: 0;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;

  &:hover {
    background-color: var(--bg-secondary);
  }

  ${DesktopNavWrapper} & {
    margin-left: 3.2rem;
  }
`;

export default DarkModeButton;
