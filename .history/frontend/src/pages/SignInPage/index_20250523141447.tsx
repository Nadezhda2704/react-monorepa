import { zSignInTrpcInput } from '@patterns/backend/src/router/signIn/input';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { Button } from '../../components/Button';
import { FormItems } from '../../components/FormItems';
import { trpc } from '../../lib/trpc';
import { useState } from 'react';
import { Informer } from '../../components/Informer';
import { useNavigate } from 'react-router-dom';
import { getAllPatternsRoute } from '../../lib/routes';

export const SignInPage = () => {
  const navigate = useNavigate();
  const trpcUtils = trpc.useContext();
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
        const { token } = await signIn.mutateAsync(values);
        Cookies.set('token', token, { expires: 100000 });
        void trpcUtils.invalidate();
        navigate(getAllPatternsRoute());
      } catch (err: any) {
        setSubmittingError(err.message);
      }
    },
  });

  return (
    <Section title="Вход">
      <form onSubmit={formik.handleSubmit}>
        <FormItems>
          <Input label="Логин" name="nick" formik={formik} />
          <Input label="Пароль" name="password" type="password" formik={formik} />
          {!formik.isValid && !!formik.submitCount && (
            <Informer color="red">Проверьте правильность заполнения формы</Informer>
          )}
          {submittingError && <Informer color="red">{submittingError}</Informer>}
          <Button loading={formik.isSubmitting}>Войти</Button>
        </FormItems>
      </form>
    </Section>
  );
};
