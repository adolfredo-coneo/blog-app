import { Dispatch } from 'react';
import { BlogPost } from '../models/Blog';
import createDataContext, { Action } from './createDataContext';

const blogReducer = (state: BlogPost[], action: Action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'EDIT_POST':
      return state.map((post) =>
        post.id === action.payload.id
          ? {
              ...post,
              title: action.payload.title,
              content: action.payload.content,
            }
          : post
      );
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const addPost = (dispatch: Dispatch<Action>) => {
  return (post: BlogPost, callback?: () => void) => {
    dispatch({
      type: 'ADD_POST',
      payload: post,
    });
    if (callback) callback();
  };
};

const editPost = (dispatch: Dispatch<Action>) => {
  return (post: BlogPost, callback?: () => void) => {
    dispatch({
      type: 'EDIT_POST',
      payload: post,
    });
    if (callback) callback();
  };
};

const deletePost = (dispatch: Dispatch<Action>) => {
  return (id: number) => {
    dispatch({
      type: 'DELETE_POST',
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addPost, editPost, deletePost },
  [
    {
      id: 1,
      title: 'Blog Post 1',
      content: 'Content of blog post 1',
    },
  ]
);
