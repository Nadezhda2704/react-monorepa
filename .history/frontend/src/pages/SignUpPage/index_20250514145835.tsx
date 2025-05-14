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
          <input
            onChange={(e) => {
              setState({ ...state, nickName: e.target.value });
            }}
            type="text"
            placeholder="Nickname"
            name="nickName"
            required
            autoFocus
          />
        </label>
        <br />
        <br />
        <label>
          Пароль
          <br />
          <input
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
            type="password"
            placeholder="Пароль"
            required
            name="password"
          />
        </label>
        <br />
        <br />
        <label>
          Повторите пароль
          <br />
          <input
            onChange={(e) => {
              setState({ ...state, passwordRepeat: e.target.value });
            }}
            type="password"
            placeholder="Повторите пароль"
            name="passwordRepeat"
            required
          />
        </label>
      </form>
    </Section>
  );
}