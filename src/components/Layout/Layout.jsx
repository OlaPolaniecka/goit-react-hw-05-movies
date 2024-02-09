import css from './Layout.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.menu}>
        <ul className={css.menu_list}>
          <li className={css.menu_item}>
            <NavLink className={css.menu_title} to="/">
              Home
            </NavLink>
          </li>
          <li className={css.menu_item}>
            <NavLink className={css.menu_title} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
