import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import { DATA_TEST_ID } from '../../../constants';
import * as S from './style';

interface ToDoAddProps {
  handleChange: ({ name, value }: { name: string; value: string }) => void;
  handleSubmit: (e: React.FormEvent<Element>) => void;
}

const ToDoAdd = ({ handleChange, handleSubmit }: ToDoAddProps) => {
  return (
    <S.ToDoAddBox>
      <TextInput name="todo" dataTestId={DATA_TEST_ID.INPUT.TODO} onChange={handleChange} $isValid={false} />
      <Button
        size="S"
        type="secondary"
        dataTestId={DATA_TEST_ID.BUTTON.TODO_ADD}
        onClick={handleSubmit}
        buttonContent="추가"
      />
    </S.ToDoAddBox>
  );
};

export default ToDoAdd;
