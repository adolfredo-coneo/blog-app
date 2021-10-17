import React from 'react';

import { BlogPost } from '../models/Blog';

interface IBlogContext {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
}

const BlogDefault = {
  posts: [],
  addPost: (post: BlogPost) => console.log('addPost', post),
};

const BlogContext = React.createContext<IBlogContext>(BlogDefault);

export default BlogContext;
