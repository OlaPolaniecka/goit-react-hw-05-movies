import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './SearchBar.module.css';

export default function SearchBar({ handleSearch }) {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className={css.search_box}>
        <input
          type="text"
          className={css.search_input}
          placeholder={isActive ? '' : 'Search for a movie...'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={event => {
            if (event.code === 'Enter') {
              handleSearch(event.target.value);
            }
          }}
        />
      </div>
    </>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
