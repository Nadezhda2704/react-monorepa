import { useState } from "react";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";

export const SignUpPage = () => {
  const [state, setState] = useState({
    nickName: '',
    password: '',
    passwordRepeat: '',
  });

  return (
    <Section title="Регистрация">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.info('Submitted', state);
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