export type TODO_ITEM = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export type TODO_LIST = TODO_ITEM[];
