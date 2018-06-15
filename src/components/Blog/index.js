import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Posts from '~/components/Posts';
import Footer from '~/components/Footer';
import categories from '~/data/categories';
import posts from '~/data/posts';
import './blog.styl';

class Blog extends React.Component {
  state = {}

  // filterPosts = (currentCategory) => {
  // Avec une closure, version ES6 :
  filterPosts = currentCategory => () => {
    // const category = evt.target.textContent;
    // this.state.category = category;
    this.setState({
      // category: category,
      // On a une valeur stockée dans une variable, qui porte le même nom que
      // la clé qu'on souhaite ajouter dans le state => raccourci syntaxique ES6
      category: currentCategory,
    });
  }

  render() {
    const filteredPosts = this.state.category ?
      posts.filter(post => post.category === this.state.category) :
      posts;

    return (
      <div className="blog">
        <Header
          categories={categories}
          filterPosts={this.filterPosts}
        />
        <Posts posts={filteredPosts} />
        <Footer />
      </div>
    );
  }
}

Blog.propTypes = {};

export default Blog;
