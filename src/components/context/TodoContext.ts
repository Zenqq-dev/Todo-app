import { createContext } from "react";
type Todo = {
  id: number;
  title: string;
  complete: boolean;
};

type TodoContext = {
  todo: Todo[];
  changeTitle: (todo: Todo, value: string) => void;
  addTodo: (todo: Todo) => void;
  complete: (todo: Todo) => void;
  remove: (todo: Todo) => void;
  filter: string;
  setFilter: (s: string) => void;
  setTodos: (t: Todo[]) => void;
};
export default createContext<TodoContext>({
  todo: [],
  changeTitle: () => {},
  addTodo: (todo: Todo) => {},
  complete: (todo: Todo) => {},
  remove: (todo: Todo) => {},
  filter: "",
  setFilter: (s: string) => {},
  setTodos: (t: Todo[]) => {},
});
