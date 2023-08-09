import { TODO_ITEM } from '../../../type';
import { useTodoContext } from '../ToDoContext';
import * as S from './style';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const { state, dispatch } = useTodoContext();

  const handleDeleteButton = (id: number) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  const handleUpdateToDo = (toDoItem: TODO_ITEM) => {
    dispatch({ type: 'UPDATE_TODO', payload: toDoItem });
  };

  return (
    <S.ToDoListBox>
      {state &&
        state.todos.map(({ id, todo, isCompleted, userId }) => {
          return (
            <ToDoItem
              key={id}
              id={id}
              todo={todo}
              isCompleted={isCompleted}
              userId={userId}
              handleUpdateToDo={handleUpdateToDo}
              handleDeleteButton={handleDeleteButton}
            />
          );
        })}
    </S.ToDoListBox>
  );
};

export default ToDoList;
