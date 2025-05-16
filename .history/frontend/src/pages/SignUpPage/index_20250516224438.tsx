import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { z } from 'zod';
import css from './index.module.scss';
import { Button } from '../../components/Button';
import { FormItems } from '../../components/FormItems';


export const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      nickName: '',
      password: '',
      confirmPassword: '',
    },
    validate: withZodSchema(
      z
        .object({
          nickName: z.string().regex(/^[a-z0-9-]+$/, 'NickName может содержать строчные буквы, цифры, и дефис'),
          password: z.string().min(1, 'Поле обязательно для заполнения'),
          confirmPassword: z.string().min(1, 'Поле обязательно для заполнения'),
        })
        .superRefine(({ confirmPassword, password }, ctx) => {
          if (confirmPassword !== password) {
            ctx.addIssue({
              code: 'custom',
              message: 'Пароли не совпадают',
              path: ['confirmPassword'],
            });
          }
        })
    ),
    onSubmit: (values) => {
      console.info('Submitted', values);
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
          <Input name="nickName" label="Nickname*" formik={formik} />
          <Input name="password" label="Пароль*" type="password" formik={formik} />
          <Input name="confirmPassword" label="Повторите пароль*" type="password" formik={formik} />

          {!formik.isValid && !!formik.submitCount && (
            <div className={css.error}>Проверьте правильность заполнения формы</div>
          )}
          <Button loading={formik.isSubmitting}>Отправить</Button>
        </FormItems>
      </form>
    </Section>
  );
};
