import { zSignUpTrpcInput } from '@ideanick/backend/src/router/signUp/input';
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


export const SignUpPage = () => {
  const navigate = useNavigate();
  const trpcUtils = trpc.useContext();
  const [submittingError, setSubmittingError] = useState<string | null>(null);
  const signUp = trpc.signUp.useMutation();
  const formik = useFormik({
    initialValues: {
      nick: '',
      password: '',
      confirmPassword: '',
    },
    validate: withZodSchema(zSignUpTrpcInput),
    onSubmit: async (values) => {
      try {
        setSubmittingError(null);
        const { token } = await signUp.mutateAsync(values);
        Cookies.set('token', token, { expires: 100000 });
        void trpcUtils.invalidate();
        navigate(getAllPatternsRoute());
      } catch (err: any) {
        setSubmittingError(err.message);
      }
    },
  });

  return (
    <Section title="Регистрация">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <FormItems>
          <Input name="nick" label="Логин" formik={formik} />
          <Input name="password" label="Пароль" type="password" formik={formik} />
          <Input name="confirmPassword" label="Повторите пароль" type="password" formik={formik} />

          {!formik.isValid && !!formik.submitCount && (
            <Informer color="red">Проверьте правильность заполнения формы</Informer>
          )}

          {submittingError && <Informer color="red">{submittingError}</Informer>}

          <Button loading={formik.isSubmitting}>Отправить</Button>
        </FormItems>
      </form>
    </Section>
  );
};
