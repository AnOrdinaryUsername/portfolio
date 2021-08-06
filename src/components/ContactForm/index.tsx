import { useForm, ValidationError } from '@formspree/react';
import { PrimaryButton } from 'components/Buttons';
import styled from 'styled-components';
import Input from './Input';
import TextArea from './TextArea';

function ContactForm() {
  const [state, handleSubmit] = useForm('xyylnlwn');

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <Legend>
          <Heading>Contact Me</Heading>
          <Input labelName="Email" identifier="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Input labelName="Subject" identifier="subject" type="text" name="subject" />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          <TextArea labelName="Message" identifier="message" name="message" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <PrimaryButton style={{ padding: '1.2rem' }} type="submit" disabled={state.submitting}>
            Submit
          </PrimaryButton>
          <SubmitSuccess isSuccess={state.succeeded}>Message has been sent!</SubmitSuccess>
        </Legend>
      </fieldset>
    </Form>
  );
}

const Form = styled.form`
  max-width: 40rem;
  width: 100%;
  margin-bottom: 2.4rem;

  @media ${(p) => p.theme.breakpoints.lg} {
    margin-bottom: 0;
    margin-right: 4.8rem;
  }
`;

export const Legend = styled.legend`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    margin-top: 1.6rem;
  }
`;

const Heading = styled.h2`
  text-align: center;

  @media ${(p) => p.theme.breakpoints.lg} {
    text-align: left;
  }
`;

interface SubmitSuccessProps {
  isSuccess: boolean;
}

const SubmitSuccess = styled.strong<SubmitSuccessProps>`
  visibility: ${(p) => (p.isSuccess ? 'visible' : 'hidden')};
  font-weight: 600;
  color: var(--green);
  text-align: center;

  @media ${(p) => p.theme.breakpoints.lg} {
    text-align: left;
  }
`;

export default ContactForm;
