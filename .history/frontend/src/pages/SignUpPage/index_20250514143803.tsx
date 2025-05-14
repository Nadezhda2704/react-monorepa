import { Section } from "../../components/Section";

export const SignUpPage = () => {

  return (
    <Section title="Регистрация">
      <form action="">
        <label>
          Nickname
          <input type="text" placeholder="Nickname" required />
        </label>
        <label>
          Пароль
          <input type="password" placeholder="Пароль" required />
        </label>
        <label>
          Повторите пароль
          <input type="password" placeholder="Повторите пароль" required />
        </label>
      </form>
    </Section>
  );
}