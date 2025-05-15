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
        errors.nickName = 'NickName может содержать буквы, цыфры, и дефис';
      }
      if (!values.password) {
        errors.password = 'Поле обязательно для заполнения';
      } 
      if (!values.passwordRepeat) {
        errors.passwordRepeat = 'Поле обязательно для заполнения';
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
        {!formik.isValid && <div style={{ color: 'red' }}>Проверьте правильность заполнения формы</div>}
        <button type="submit">Отправить</button>
      </form>
    </Section>
  );
}