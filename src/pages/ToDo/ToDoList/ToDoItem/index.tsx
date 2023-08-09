import { useState } from 'react';
import Button from '../../../../components/Button';
import TextInput from '../../../../components/TextInput';
import { DATA_TEST_ID } from '../../../../constants';
import { TODO_ITEM } from '../../../../type';
import * as S from './style';

interface ToDoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  handleUpdateToDo: (toDoItem: TODO_ITEM) => void;
  handleDeleteButton: (id: number) => void;
}

const ToDoItem = ({ id, todo, isCompleted, userId, handleUpdateToDo, handleDeleteButton }: ToDoItemProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [text, setText] = useState({ todo });

  const handleSubmitButton = () => {
    handleUpdateToDo({
      id,
      todo: text.todo,
      isCompleted,
      userId,
    });
    setIsEditMode(false);
  };

  return (
    <S.ToDoItemBox>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() =>
            handleUpdateToDo({
              id,
              todo,
              isCompleted: !isCompleted,
              userId,
            })
          }
        />
        {!isEditMode ? (
          <S.ToDoItemText $isCompleted={isCompleted}>{todo}</S.ToDoItemText>
        ) : (
          <TextInput
            name={todo}
            value={text.todo}
            dataTestId={DATA_TEST_ID.INPUT.MODIFY_TODO}
            onChange={({ value }) => setText({ todo: value })}
            $isValid={false}
          />
        )}
      </label>
      {!isEditMode ? (
        <>
          <Button
            size="S"
            type="secondary"
            dataTestId={DATA_TEST_ID.BUTTON.TODO_MODIFY}
            onClick={() => setIsEditMode(true)}
            buttonContent="수정"
          />
          <Button
            size="S"
            type="secondary"
            dataTestId={DATA_TEST_ID.BUTTON.TODO_DELETE}
            onClick={() => handleDeleteButton(id)}
            buttonContent="삭제"
          />
        </>
      ) : (
        <>
          <Button
            size="S"
            type="secondary"
            dataTestId={DATA_TEST_ID.BUTTON.TODO_SUBMIT}
            onClick={() => handleSubmitButton()}
            buttonContent="제출"
          />
          <Button
            size="S"
            type="secondary"
            dataTestId={DATA_TEST_ID.BUTTON.TODO_CANCEL}
            onClick={() => setIsEditMode(false)}
            buttonContent="취소"
          />
        </>
      )}
    </S.ToDoItemBox>
  );
};

export default ToDoItem;
