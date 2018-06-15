import React from 'react';
import PropTypes from 'prop-types';

import './header.styl';

const Header = ({ categories, filterPosts }) => {
  const categoriesJSX = categories.map(category => (
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    <a
      className="blog-header-category"
      key={category}
      onClick={filterPosts(category)}
    >
      {category}
    </a>
  ));

  return (
    <header className="blog-header content--centered">
      {categoriesJSX}
    </header>
  );
};

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  filterPosts: PropTypes.func.isRequired,
};

export default Header;
