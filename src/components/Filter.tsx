import React, { useContext } from "react";
import { cn } from "../utils/utils";
import TodoContext from "./context/TodoContext";
import { useDarkContext } from "../hooks/useTheme";
import useDevice from "../hooks/useDevice";
import FilterBar from "./UI/FilterBar/FilterBar";

export default function Filter() {
  const { darkMode } = useDarkContext();
  const device = useDevice();
  const { todo, setTodos } = useContext(TodoContext);

  const clearCompleted = () => {
    todo && setTodos(todo.filter((t) => t.complete === false));
  };

  return (
    <div>
      {device === "desktop" && (
        <div
          className={cn(
            "p-4 flex w-full items-center justify-between bg-[#25273C] rounded-md text-[#4d5066]",
            !darkMode && "bg-[#fafafa] border-[#e4e5f1] text-[#9394a5]",
          )}>
          <div>{todo && todo.length ? `${todo.length} items left` : "no tasks"}</div>
          <FilterBar />
          <button
            className={cn(darkMode && "hover:text-[#e4e5f1]", "hover:text-[#484b6a]")}
            onClick={clearCompleted}
            value='Clear completed'>
            Clear Completed
          </button>
        </div>
      )}
      {device === "mobile" && (
        <div>
          <div
            className={cn(
              "p-4 flex w-full items-center justify-between bg-[#25273C] rounded-md text-[#4d5066]",
              !darkMode && "bg-[#fafafa] border-[#e4e5f1] text-[#9394a5]",
            )}>
            <div>{todo && todo.length ? `${todo.length} items left` : "no tasks"}</div>
            <button
              className={cn(darkMode && "hover:text-[#e4e5f1]", "hover:text-[#484b6a]")}
              onClick={clearCompleted}
              value='Clear completed'>
              Clear Completed
            </button>
          </div>
          <div
            className={cn(
              "p-4 mt-6 flex w-full items-center justify-center bg-[#25273C] rounded-md text-[#4d5066]",
              !darkMode && "bg-[#fafafa] border-[#e4e5f1] text-[#9394a5]",
            )}>
            <FilterBar />
          </div>
        </div>
      )}
    </div>
  );
}
