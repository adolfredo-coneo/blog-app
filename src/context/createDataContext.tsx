import React, { useReducer, Dispatch, Reducer } from 'react';

export interface Action {
  type: string;
  payload: any;
}

type BoundActions<T> = {
  [K in keyof T]: T[K] extends (d: Dispatch<Action>) => infer R ? R : never
}

type ContextValue<T, G> = {
  state: G;
} & BoundActions<T>


export default <T extends {}, G>(reducer: Reducer<G, Action>, actions: T, initialState: G) => {
  const Context = React.createContext({state: initialState} as ContextValue<T, G>);

  const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions= {} as BoundActions<T>;
    for (let key in actions) {
      // @ts-ignore - I don't want to make a confusing mess so just ignore this
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};