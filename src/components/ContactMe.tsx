import { InputText } from 'components/Inputs';
import Sparkles from 'components/Sparkles';
import { Bob } from 'components/Svgs/Background';
import { useWindowSize } from 'hooks';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import { BREAKPOINT_SIZES } from '../constants';

interface EmailSender {
  email: string;
  subject: string;
  message: string;
}

function ContactMe() {
  const sender: EmailSender = {
    email: '',
    subject: '',
    message: '',
  };
  const [contactInfo, setContactInfo] = React.useState<EmailSender>(sender);
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINT_SIZES.sm;
  const bobHeight = isMobile ? '300' : undefined;

  const sparkleSize = {
    min: isMobile ? 8 : 15,
    max: isMobile ? 12 : 20,
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  React.useEffect(() => {
    console.log(contactInfo);
  }, [contactInfo]);

  return (
    <Section>
      <Form>
        <fieldset>
          <Legend>
            <Heading>Contact Me</Heading>
            <InputText
              labelName="Email"
              isRequired={true}
              id="email"
              value={contactInfo.email}
              onChange={handleInputChange}
            />
            <InputText
              labelName="Subject"
              isRequired={true}
              id="subject"
              value={contactInfo.subject}
              onChange={handleInputChange}
            />
            <InputText
              labelName="Message"
              isRequired={true}
              id="message"
              value={contactInfo.message}
              onChange={handleInputChange}
            />
          </Legend>
        </fieldset>
      </Form>
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

const Form = styled.form`
  max-width: 46rem;
  width: 100%;
  margin-bottom: 2.4rem;

  @media ${(p) => p.theme.breakpoints.med} {
    max-width: 52rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    max-width: 46rem;
    margin-bottom: 0;
    margin-right: 4.8rem;
  }
`;

const Legend = styled.legend`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.8rem;
  width: 100%;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 3.2rem;

  @media ${(p) => p.theme.breakpoints.lg} {
    text-align: left;
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
  left: 15%;

  @media ${(p) => p.theme.breakpoints.sm} {
    left: 10%;
  }
`;

const BobSays = styled.p`
  font-size: 2rem;
  max-width: 21rem;
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
