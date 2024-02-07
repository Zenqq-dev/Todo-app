import React, { useContext } from "react";
import { cn } from "../../../utils/utils";
import TodoContext from "../../context/TodoContext";
import { useDarkContext } from "../../../hooks/useTheme";

export default function FilterBar() {
  const { setFilter, filter } = useContext(TodoContext);
  const { darkMode } = useDarkContext();
  const filtration = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <div className='flex'>
      <button
        className={cn(
          "pr-3 ",
          filter === "All" && "text-[#3a7bfd]",
          filter !== "All" && darkMode && "hover:text-[#e4e5f1]",
          filter !== "All" && !darkMode && "hover:text-[#484b6a]",
        )}
        value='All'
        onClick={filtration}>
        All
      </button>
      <button
        className={cn(
          "pr-3",
          filter === "Active" && "text-[#3a7bfd]",
          filter !== "Active" && darkMode && "hover:text-[#e4e5f1]",
          filter !== "Active" && !darkMode && "hover:text-[#484b6a]",
        )}
        value='Active'
        onClick={filtration}>
        Active
      </button>
      <button
        className={cn(
          filter === "Completed" && "text-[#3a7bfd]",
          filter !== "Completed" && darkMode && "hover:text-[#e4e5f1]",
          filter !== "Completed" && !darkMode && "hover:text-[#484b6a]",
        )}
        value='Completed'
        onClick={filtration}>
        Completed
      </button>
    </div>
  );
}
