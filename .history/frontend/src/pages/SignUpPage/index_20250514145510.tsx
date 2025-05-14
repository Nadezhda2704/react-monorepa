import { useState } from "react";
import { Section } from "../../components/Section";

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
        <label>
          Nickname
          <br />
          <input autoFocus type="text" placeholder="Nickname" required />
        </label>
        <br />
        <br />
        <label>
          Пароль
          <br />
          <input type="password" placeholder="Пароль" required />
        </label>
        <br />
        <br />
        <label>
          Повторите пароль
          <br />
          <input type="password" placeholder="Повторите пароль" required />
        </label>
      </form>
    </Section>
  );
}