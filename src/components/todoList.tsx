import React, { useContext } from "react";
import Item from "./item";
import Filter from "./Filter";
import TodoContext from "./context/TodoContext";
import { DropResult } from "react-beautiful-dnd";
import { Todo } from "./context/TodoContextProvider";
import DragAndDropList from "./dragAndDropList";

export default function TodoList() {
  const { todo, setTodos } = useContext(TodoContext);
  const reorder = (list: Todo[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const handleDragEnd = (dropItem: DropResult) => {
    if (!dropItem.destination) return;
    setTodos(reorder(todo, dropItem.source.index, dropItem.destination.index));
  };
  return (
    <div className='my-12'>
      <Item isCreator />
      <DragAndDropList handleDragEnd={handleDragEnd} />
      <Filter />
    </div>
  );
}
