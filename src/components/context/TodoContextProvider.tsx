import React, { useState } from "react";
import TodoContext from "./TodoContext";
export type Todo = {
  id: number;
  title: string;
  complete: boolean;
};
type Props = {
  children: React.ReactNode;
};

export default function TodoContextProvider({ children }: Props) {
  const [filter, setFilter] = useState("All");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Wash the dishes",
      complete: true,
    },
    {
      id: 2,
      title: "1",
      complete: false,
    },
    {
      id: 3,
      title: "2",
      complete: true,
    },
  ]);

  const changeTitle = (todo: Todo, value: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((t) => (t.id === todo.id ? { ...t, title: value } : t));
      return updatedTodos;
    });
  };

  const completeTask = (todo: Todo) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((t) => (t.id === todo.id ? { ...t, complete: !t.complete } : t));
      return updatedTodos;
    });
  };

  const removeTodo = (todo: Todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };

  const filteredTask = () => {
    switch (filter) {
      case "Completed":
        return [...todos].filter((t) => t.complete === true);
      case "Active":
        return [...todos].filter((t) => t.complete === false);
      case "Clear completed":
        setTodos([...todos].filter((t) => t.complete === false));
        return todos.filter((t) => t.complete === false);
      default:
        return todos;
    }
  };
  const filtTodos = filteredTask();
  return (
    <TodoContext.Provider
      value={{
        todo: filtTodos,
        changeTitle: changeTitle,
        addTodo,
        complete: completeTask,
        remove: removeTodo,
        filter: filter,
        setFilter: setFilter,
        setTodos,
      }}>
      {children}
    </TodoContext.Provider>
  );
}
