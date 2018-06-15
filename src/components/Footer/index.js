import React from 'react';
import PropTypes from 'prop-types';

import './footer.styl';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="blog-footer">
      DevOfThrones, le blog du développeur React - {year} ©
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
