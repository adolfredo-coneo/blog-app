import { Dispatch } from 'react';
import { BlogPost } from '../models/Blog';
import createDataContext, { Action } from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state: BlogPost[], action: Action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.payload;
    case 'EDIT_POST':
      return state.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const getPosts = (dispatch: Dispatch<Action>) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'GET_POSTS', payload: response.data });
  };
};

const addPost = (dispatch: Dispatch<Action>) => {
  return async (post: BlogPost, callback?: () => void) => {
    await jsonServer.post('/blogposts', {
      title: post.title,
      content: post.content,
    });
    if (callback) callback();
  };
};

const editPost = (dispatch: Dispatch<Action>) => {
  return async (post: BlogPost, callback?: () => void) => {
    await jsonServer.put(`/blogposts/${post.id}`, {
      title: post.title,
      content: post.content,
    });
    dispatch({
      type: 'EDIT_POST',
      payload: post,
    });
    if (callback) callback();
  };
};

const deletePost = (dispatch: Dispatch<Action>) => {
  return async (id: number) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'DELETE_POST', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addPost, editPost, deletePost, getPosts },
  []
);
