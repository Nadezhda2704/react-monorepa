import { Link, Outlet } from 'react-router-dom';
import { getAllPatternsRoute } from '../../lib/routes';

export const Layout = () => {
  return (
    <div>
      <p>
        <b>Паттерны</b>
      </p>
      <ul>
        <li>
          <Link to={getAllPatternsRoute()}>Паттерны</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
