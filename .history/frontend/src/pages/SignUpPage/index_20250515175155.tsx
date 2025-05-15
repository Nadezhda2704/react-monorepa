import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import {useFormik} from 'formik';
import { withZodSchema } from "formik-validator-zod";
import {z} from 'zod';

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
          nickName: z
            .string()
            .min(1, 'Поле обязательно для заполнения')
            .regex(/^[a-z0-9-]+$/, 'NickName может содержать буквы, цифры, и дефис'),
          password: z.string().min(1, 'Поле обязательно для заполнения'),
          confirmPassword: z.string().min(1, 'Поле обязательно для заполнения'),
        })
        .superRefine(({ confirmPassword, password }, ctx) => {
          if (confirmPassword !== password) {
            ctx.addIssue({
              code: 'custom',
              message: 'The passwords did not match',
              path: ['confirmPassword'],
            });
          }
        })
    ),
    // validate: (values) => {
    //   const errors: Partial<typeof values> = {};
    //   if (!values.nickName) {
    //     errors.nickName = 'Поле обязательно для заполнения';
    //   } else if (!values.nickName.match(/^[a-z0-9-]+$/)) {
    //     errors.nickName = 'NickName может содержать буквы, цыфры, и дефис';
    //   }
    //   if (!values.password) {
    //     errors.password = 'Поле обязательно для заполнения';
    //   }
    //   if (!values.confirmPassword) {
    //     errors.confirmPassword = 'Поле обязательно для заполнения';
    //   } else if (values.password !== values.confirmPassword) {
    //     errors.confirmPassword = 'Пароли не совпадают';
    //   }
    //   return errors;
    // },
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
        <Input name="nickName" label="Nickname*" formik={formik} />
        <Input name="password" label="Пароль*" type="password" formik={formik} />
        <Input name="passwordRepeat" label="Повторите пароль*" type="password" formik={formik} />

        <br />
        {!formik.isValid && !!formik.submitCount && <div style={{ color: 'red' }}>Проверьте правильность заполнения формы</div>}
        <button type="submit">Отправить</button>
      </form>
    </Section>
  );
}