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
            value={state.nickName}
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
            value={state.password}
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
            value={state.passwordRepeat}
            type="password"
            placeholder="Повторите пароль"
            name="passwordRepeat"
            required
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </Section>
  );
}