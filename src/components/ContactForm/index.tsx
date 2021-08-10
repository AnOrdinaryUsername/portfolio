import { useForm, ValidationError } from '@formspree/react';
import { PrimaryButton } from 'components/Buttons';
import * as React from 'react';
import styled from 'styled-components';
import Input from './Input';
import TextArea from './TextArea';

interface ContactFormProps {
  formRef: React.Ref<HTMLFormElement>;
}

function ContactForm({ formRef }: ContactFormProps) {
  const [state, handleSubmit] = useForm('xyylnlwn');

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <Fieldset>
        <Legend>
          <h2>Contact Me</h2>
        </Legend>
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
      </Fieldset>
    </Form>
  );
}

const Form = styled.form`
  max-width: 40rem;
  width: 100%;
  margin-bottom: 2.4rem;

  @media ${(p) => p.theme.breakpoints.lg} {
    padding-bottom: 8rem;
    margin-bottom: 0;
    margin-right: 4.8rem;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:not(:first-child) {
    margin-top: 1.6rem;
  }
`;

const Legend = styled.legend`
  margin: 0 auto;
  margin-bottom: 0.8rem;
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
