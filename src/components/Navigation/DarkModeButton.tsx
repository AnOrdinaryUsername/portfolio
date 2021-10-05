import { useToggle } from 'hooks';
import * as React from 'react';
import { Moon, Sun } from 'react-feather';
import styled from 'styled-components';
import { COLORS } from '../../constants';

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
  const [isDarkMode, setIsDarkMode] = useToggle(true);

  React.useEffect(() => {
    const initialTheme = window.localStorage.getItem('color-mode');
    if (initialTheme === 'light') {
      setIsDarkMode();
    }
  }, []);

  React.useEffect(() => {
    const theme = isDarkMode ? 'light' : 'dark';
    changeColorMode(theme);
  }, [isDarkMode]);

  return (
    <Button
      onClick={setIsDarkMode}
      aria-label={isDarkMode ? 'Activate light mode' : 'Activate dark mode'}
    >
      {isDarkMode ? <Sun strokeWidth={1.5} /> : <Moon strokeWidth={1.5} />}
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
`;

export default DarkModeButton;
