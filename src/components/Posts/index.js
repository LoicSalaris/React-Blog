import React from 'react';
import PropTypes from 'prop-types';

import Post from '~/components/Post';
import './posts.styl';

const Posts = ({ posts }) => {
  const postsJSX = posts.map(post => (
    // <Post title={post.title} category={post.category} excerpt={post.excerpt} />
    // Post(title, category, excerpt)
    // Post(...post)
    <Post key={post.id} {...post} />
  ));

  return (
    <main className="blog-posts content--centered">
      {postsJSX}
    </main>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Posts;
