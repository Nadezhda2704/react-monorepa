import { Link, Outlet } from 'react-router-dom';
import { getAllPatternsRoute, getTypePatternRoute } from '../../lib/routes';
import css from './index.module.scss';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <Link className={css.logo} to={getAllPatternsRoute()}>
          Home
        </Link>
        <nav className={css.menu}>
          <Link className={css.link} to={getAllPatternsRoute()}>
            Паттерны
          </Link>
          <Link className={css.link} to={getTypePatternRoute({ patternType: 'creational' })}>
            Порождающие
          </Link>
          <Link className={css.link} to={getTypePatternRoute({ patternType: 'structural' })}>
            Структурные
          </Link>
          <Link className={css.link} to={getTypePatternRoute({ patternType: 'behavioral' })}>
            Поведенческие
          </Link>
        </nav>
      </div>
      <div className={css.container}>
        <Outlet />
      </div>
    </div>
  );
};
