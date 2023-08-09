import styled from 'styled-components';

type ToDoItemTextProp = {
  $isCompleted: boolean;
};

export const ToDoItemBox = styled.li`
  display: flex;

  > label {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    width: 100%;
  }

  > button {
    margin: 0 3px;
  }

  input {
    margin: 0;
  }
`;

export const ToDoItemText = styled.span<ToDoItemTextProp>`
  width: 100%;
  margin: 0;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: 20px;
  font-weight: 400;
  text-decoration: ${({ $isCompleted }) => ($isCompleted ? 'line-through' : 'none')};
`;
