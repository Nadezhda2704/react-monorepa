import { Link, Outlet } from 'react-router-dom';
import { getAllPatternsRoute } from '../../lib/routes';
import css from './index.module.scss';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
          <Link className={css.logo} to={getAllPatternsRoute()}>
            Home
          </Link>
          <nav>
            <Link className={css.link} to={getAllPatternsRoute()}>
              Паттерны
            </Link>
          </nav>
      </div>
      <div className={css.container}>
        <Outlet />
      </div>
    </div>
  );
};
