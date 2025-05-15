import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import {useFormik} from 'formik';

export const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      nickName: '',
      password: '',
      passwordRepeat: '',
    },
    validate: (values) => {
      const errors: Partial<typeof values> = {};
      if (!values.nickName) {
        errors.nickName = 'Name is required';
      } else if (!values.nickName.match(/^[a-z0-9-]+$/)) {
        errors.nickName = 'NickName may contain only lowercase letters, numbers and dashes';
      }
      if (!values.password) {
        errors.password = 'password is required';
      } 
      if (!values.passwordRepeat) {
        errors.passwordRepeat = 'Description is required';
      }
      return errors;
    },
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
        <Input name="nickName" label="Nickname" formik={formik} />
        <Input name="password" label="Пароль" type="password" formik={formik} />
        <Input name="passwordRepeat" label="Повторите пароль" type="password" formik={formik} />

        <br />
        <button type="submit">Отправить</button>
      </form>
    </Section>
  );
}