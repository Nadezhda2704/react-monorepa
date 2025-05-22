import { Link } from 'react-router-dom';
import { Section } from '../../components/Section';
import { getAllPatternsRoute } from '../../lib/routes';
import css from './index.module.scss';

export const NotFoundPage = () => {
    // return <span>Loading...</span>;
  return (
    <Section title="404">
      <Link className={css.link} to={getAllPatternsRoute()}>
        Перейти на главную
      </Link>
    </Section>
  );
};
