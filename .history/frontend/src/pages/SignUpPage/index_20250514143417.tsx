import { Section } from "../../components/Section";

export const SignUpPage = () => {

  return (
    <Section title="Регистрация">
      <form action="">
        <label>
          Nickname
          <input type="text" placeholder="Nickname" />
        </label>
      </form>
    </Section>
  );
}