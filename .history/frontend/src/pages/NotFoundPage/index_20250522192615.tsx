import { Link } from 'react-router-dom';
import { Section } from '../../components/Section';
import { getAllPatternsRoute } from '../../lib/routes';

export const NotFoundPage = () => {
  return (
    <Section title="All Patterns">
      <Link className={css.link} to={getAllPatternsRoute()}>
        Перейти на главную
      </Link>
    </Section>
  );
};
