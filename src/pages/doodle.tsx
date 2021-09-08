import { PrimaryButton, SecondaryButton } from 'components/Buttons';
import { Dialog, DialogContent, DialogOptions, DialogText, DialogTitle } from 'components/Dialog';
import DoodleBoard from 'components/DoodleBoard';
import { useToggle } from 'hooks';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

function Doodle() {
  const router = useRouter();
  const [hasWarning, setHasWarning] = React.useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useToggle(true);

  const goBackToPreviousPage = () => router.back();

  React.useEffect(() => {
    const checkTheme = () => {
      const theme = window.localStorage.getItem('color-mode');
      const hasBeenAskedBefore = window.localStorage.getItem('doodle-check');

      if (theme === 'dark') {
        if (hasBeenAskedBefore === 'yep') {
          return;
        }

        window.localStorage.setItem('doodle-check', 'yep');
        setHasWarning(true);
      }
    };

    checkTheme();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Main>
        <DoodleBoard />
        {hasWarning && (
          <Dialog isOpen={isDialogOpen} zIndex={9999} onClose={setIsDialogOpen}>
            <DialogContent>
              <DialogTitle title="Bright lights ahead!" />
              <DialogText>
                Hey, it looks like you&apos;re in dark mode. The page you&apos;re going to uses a
                bright white background for drawing. Would you like to proceed anyway?
              </DialogText>
            </DialogContent>
            <DialogOptions>
              <SecondaryButton style={{ padding: '0.8rem 1.6rem' }} onClick={goBackToPreviousPage}>
                Take me back!
              </SecondaryButton>
              <PrimaryButton style={{ padding: '0.8rem 1.6rem' }} onClick={setIsDialogOpen}>
                I&apos;ll take my chances
              </PrimaryButton>
            </DialogOptions>
          </Dialog>
        )}
      </Main>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`;

const Main = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

export default Doodle;
