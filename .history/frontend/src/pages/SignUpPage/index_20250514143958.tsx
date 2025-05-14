import { Section } from "../../components/Section";

export const SignUpPage = () => {

  return (
    <Section title="Регистрация">
      <form action="">
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