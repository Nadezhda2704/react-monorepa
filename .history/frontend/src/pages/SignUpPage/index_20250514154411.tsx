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
        onSubmit={() => {
          formik.handleSubmit();
        }}
      >
        <Input name="nickName" label="Nickname" state={state} setState={setState} />
        <Input name="password" label="Пароль" state={state} setState={setState} />
        <Input name="passwordRepeat" label="Повторите пароль" state={state} setState={setState} />

        <br/>
        <button type="submit">Отправить</button>
      </form>
    </Section>
  );
}