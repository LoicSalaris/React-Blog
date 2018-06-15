import React from 'react';
import PropTypes from 'prop-types';

import './post.styl';

const Post = ({ title: name, category, excerpt }) => (
  <div
    className="blog-post"
  >
    <h1 className="blog-post-title">{name}</h1>
    <div className="blog-post-category">{category}</div>
    <div className="blog-post-excerpt">{excerpt}</div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
