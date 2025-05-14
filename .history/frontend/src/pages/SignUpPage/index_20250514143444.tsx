import { Section } from "../../components/Section";

export const SignUpPage = () => {

  return (
    <Section title="Регистрация">
      <form action="">
        <label>
          Nickname
          <input type="text" placeholder="Nickname" />
        </label>
        <label>
          Пароль
          <input type="password" placeholder="Пароль" />
        </label>
        <label>
          Повторите пароль
          <input type="password" placeholder="Повторите пароль" />
        </label>
      </form>
    </Section>
  );
}