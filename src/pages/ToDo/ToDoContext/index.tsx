import React, { createContext, ReactNode, useContext, useReducer, useEffect } from 'react';
import { END_POINT } from '../../../constants/endpoint';
import useFetch from '../../../hooks/useFetch';
import { TODO_ITEM, TODO_LIST } from '../../../type';

type TODO_TYPE = 'SET_TODO' | 'ADD_TODO' | 'UPDATE_TODO' | 'DELETE_TODO' | 'RESET_LAST_ACTION' | null;

type TODO_ACTION = {
  type: TODO_TYPE;
  payload: TODO_LIST | { id: number };
};

type TODO_STATE = { todos: TODO_LIST; targetId: number | null; lastAction: TODO_TYPE };

export interface TodoContextProps {
  state: TODO_STATE;
  dispatch: React.Dispatch<TODO_ACTION>;
}

export const TodoContext = createContext<TodoContextProps | undefined>(undefined);

const initialState: TODO_STATE = {
  todos: [],
  targetId: null,
  lastAction: null,
};

const todoReducer = (state: TODO_STATE, action: TODO_ACTION): TODO_STATE => {
  switch (action.type) {
    case 'SET_TODO':
      return { todos: [...(action.payload as TODO_LIST)], lastAction: 'SET_TODO' } as TODO_STATE;

    case 'ADD_TODO':
      return { todos: [...state.todos, ...(action.payload as TODO_LIST)], lastAction: 'ADD_TODO' } as TODO_STATE;

    case 'UPDATE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === (action.payload as TODO_ITEM).id ? (action.payload as TODO_ITEM) : todo
        ),
        targetId: (action.payload as TODO_ITEM).id,
        lastAction: 'UPDATE_TODO',
      };

    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== (action.payload as { id: number }).id),
        targetId: (action.payload as TODO_ITEM).id,
        lastAction: 'DELETE_TODO',
      };

    case 'RESET_LAST_ACTION':
      return { ...state, lastAction: null };

    default:
      return state;
  }
};

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { fetchData } = useFetch();

  const updateTodoAsync = async () => {
    if (state.lastAction === 'UPDATE_TODO') {
      fetchData({
        url: `${END_POINT.TODOS}/${state.targetId}`,
        method: 'PUT',
        isGetData: false,
        body: JSON.stringify(state.todos.find(todo => todo.id === state.targetId)),
      });
    }
    if (state.lastAction === 'DELETE_TODO') {
      fetchData({
        url: `${END_POINT.TODOS}/${state.targetId}`,
        method: 'DELETE',
        isGetData: false,
      });
    }
    dispatch({ type: 'RESET_LAST_ACTION', payload: [] });
  };

  useEffect(() => {
    updateTodoAsync();
  }, [state.lastAction]);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
