import { Section } from "../../components/Section";

export const SignUpPage = () => {

  return (
    <Section title="Регистрация">
      <form action="">
        <label>
          Nickname
          <input autoFocus type="text" placeholder="Nickname" required />
        </label>
        <br />
        <label>
          Пароль
          <input type="password" placeholder="Пароль" required />
        </label>
        <br />
        <label>
          Повторите пароль
          <input type="password" placeholder="Повторите пароль" required />
        </label>
      </form>
    </Section>
  );
}