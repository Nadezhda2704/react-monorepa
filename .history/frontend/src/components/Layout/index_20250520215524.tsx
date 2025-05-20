import { Link, Outlet } from 'react-router-dom';
import { getAllPatternsRoute, getSignInRoute, getSignUpRoute, getTypePatternRoute } from '../../lib/routes';
import css from './index.module.scss';
import { trpc } from '../../lib/trpc';

export const Layout = () => {
  const { data, isLoading, isFetching, isError } = trpc.getAuthorizedUser.useQuery();

  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <Link className={css.logo} to={getAllPatternsRoute()}>
          Home
        </Link>

        {isLoading || isFetching || isError ? null : data.authorizedUser ? (
          <>
            <Link className={css.logo} to={getSignOutRoute()}>
              Выход {data.authorizedUser}
            </Link>
          </>
        ) : (
          <>
            <Link className={css.logo} to={getSignInRoute()}>
              Вход
            </Link>
            <Link className={css.logo} to={getSignUpRoute()}>
              Регистрация
            </Link>
          </>
        )}
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
