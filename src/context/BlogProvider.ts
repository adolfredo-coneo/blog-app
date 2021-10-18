import { Dispatch } from 'react';
import { BlogPost } from '../models/Blog';
import createDataContext, { Action } from './createDataContext';

const blogReducer = (state: BlogPost[], action: Action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const addPost = (dispatch: Dispatch<Action>) => {
  return (post: BlogPost) => {
    dispatch({
      type: 'ADD_POST',
      payload: post,
    });
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
  { addPost, deletePost },
  []
);
