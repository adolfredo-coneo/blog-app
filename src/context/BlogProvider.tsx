import React, { useState } from 'react';
import { BlogPost } from '../models/Blog';
import BlogContext from './BlogContext';

const BlogProvider: React.FC = ({ children }) => {
  const [blogPosts, setBlogsPosts] = useState<BlogPost[]>([]);

  const addPost = (blogPost: BlogPost) => {
    setBlogsPosts((current) => [...current, blogPost]);
  };

  return (
    <BlogContext.Provider value={{ posts: blogPosts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
