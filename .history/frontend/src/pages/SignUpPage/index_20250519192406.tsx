import { zSignUpTrpcInput } from '@patterns/backend/src/router/signUp/input';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { Button } from '../../components/Button';
import { FormItems } from '../../components/FormItems';
import { trpc } from '../../lib/trpc';
import { useState } from 'react';
import { Informer } from '../../components/Informer';


export const SignUpPage = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
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
        await signUp.mutateAsync(values);
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
          {successMessageVisible && <Informer color="green">Регистрация прошла успешно! 🎉</Informer>}

          <Button loading={formik.isSubmitting}>Отправить</Button>
        </FormItems>
      </form>
    </Section>
  );
};
