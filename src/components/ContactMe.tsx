import ContactForm from 'components/ContactForm';
import Sparkles from 'components/Sparkles';
import { Bob } from 'components/Svgs/Background';
import { useWindowSize } from 'hooks';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import { BREAKPOINT_SIZES } from '../constants';

function ContactMe() {
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINT_SIZES.sm;
  const bobHeight = isMobile ? '300' : undefined;

  const sparkleSize = {
    min: isMobile ? 8 : 15,
    max: isMobile ? 12 : 20,
  };

  return (
    <Section>
      <ContactForm />
      <Aside>
        <SpeechBubble>
          <BobSays>
            <Whisper>Psst!</Whisper> You can also send me a{' '}
            <Link href="/doodle" passHref={true}>
              <Anchor>
                <Sparkles
                  style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
                  sparkleSize={sparkleSize}
                >
                  doodle
                </Sparkles>
              </Anchor>
            </Link>{' '}
            ✏️
          </BobSays>
        </SpeechBubble>
        <Bob width={bobHeight} />
      </Aside>
    </Section>
  );
}

const Section = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media ${(p) => p.theme.breakpoints.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Aside = styled.aside`
  position: relative;
  top: 3%;

  @media ${(p) => p.theme.breakpoints.lg} {
    align-self: flex-end;
    top: 5%;
  }
`;

const SpeechBubble = styled.div`
  position: absolute;
  top: 17%;
  left: 12%;

  @media ${(p) => p.theme.breakpoints.sm} {
    left: 10%;
  }
`;

const BobSays = styled.p`
  font-size: 2rem;
  max-width: 23rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  color: #4c566a;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 3.6rem;
    max-width: 41rem;
  }
`;

const Whisper = styled.span`
  color: hsl(193, 33%, 47%);
`;

const Anchor = styled.a`
  font-weight: 700;
  color: var(--accent-quaternary);
`;

export default ContactMe;
