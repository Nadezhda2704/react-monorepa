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
        <Input name="password" label="Пароль" formik={formik} />
        <Input name="passwordRepeat" label="Повторите пароль" formik={formik} />

        <br />
        <button type="submit">Отправить</button>
      </form>
    </Section>
  );
}