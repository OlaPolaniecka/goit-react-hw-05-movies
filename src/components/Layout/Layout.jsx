import css from './Layout.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const [isHover, setIsHover] = useState({
    home: false,
    movies: false,
  });

  const handleMouseOver = target => {
    setIsHover(prevState => ({
      ...prevState,
      [target]: true,
    }));
  };

  const handleMouseLeave = target => {
    setIsHover(prevState => ({
      ...prevState,
      [target]: false,
    }));
  };

  return (
    <>
      <header className={css.menu}>
        <ul className={css.menu_list}>
          <li className={css.menu_item}>
            <NavLink
              className={clsx(css.menu_title, {
                [css['is-hover']]: isHover.home,
              })}
              onMouseOver={() => handleMouseOver('home')}
              onMouseLeave={() => handleMouseLeave('home')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css.menu_item}>
            <NavLink
              className={clsx(css.menu_title, {
                [css['is-hover']]: isHover.movies,
              })}
              onMouseOver={() => handleMouseOver('movies')}
              onMouseLeave={() => handleMouseLeave('movies')}
              to="/movies"
            >
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
