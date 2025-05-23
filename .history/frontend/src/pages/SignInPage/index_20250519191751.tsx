import { zSignInTrpcInput } from '@patterns/backend/src/router/signIn/input';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { z } from 'zod';
import css from './index.module.scss';
import { Button } from '../../components/Button';
import { FormItems } from '../../components/FormItems';
import { trpc } from '../../lib/trpc';
import { useState } from 'react';
import { Informer } from '../../components/Informer';

export const SignInPage = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [submittingError, setSubmittingError] = useState<string | null>(null);
  const signIn = trpc.signIn.useMutation();
  const formik = useFormik({
    initialValues: {
      nick: '',
      password: '',
    },
    validate: withZodSchema(zSignInTrpcInput),
    onSubmit: async (values) => {
      try {
        setSubmittingError(null);
        await signIn.mutateAsync(values);
        formik.resetForm();
        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
        }, 3000);
      } catch (err: any) {
        setSubmittingError(err.message);
      }
    },
  });

  return (
    <Section title="Вход">
      <form onSubmit={formik.handleSubmit}>
        <FormItems>
          <Input label="Nick" name="nick" formik={formik} />
          <Input label="Password" name="password" type="password" formik={formik} />
          {!formik.isValid && !!formik.submitCount && <Informer color="red">Some fields are invalid</Informer>}
          {submittingError && <Informer color="red">{submittingError}</Informer>}
          {successMessageVisible && <Informer color="green">Thanks for sign in!</Informer>}
          <Button loading={formik.isSubmitting}>Sign In</Button>
        </FormItems>
      </form>
    </Section>
  );
};
