import React, { useContext, useRef, useState } from "react";
import { cn } from "../utils/utils";
import { useDarkContext } from "../hooks/useTheme";
import TodoContext from "./context/TodoContext";
import useDevice from "../hooks/useDevice";
import { Todo } from "./context/TodoContextProvider";

type Props = {
  isCreator?: boolean;
  item?: Todo;
};

export default function Item({ item, isCreator }: Props) {
  const { changeTitle, addTodo, complete, remove } = useContext(TodoContext);
  const { darkMode } = useDarkContext();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [creatorTitle, setCreatorTitle] = useState("Create a new todo...");
  const device = useDevice();

  const enableInput = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      if (isCreator) {
        inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
      }
    }, 0);
  };
  const disableInput = () => {
    setIsEditing(false);
  };
  const createTodo = () => {
    if (isCreator) {
      const newTodo = { id: Date.now(), title: creatorTitle, complete: false };
      addTodo(newTodo);
      setCreatorTitle("Create a new todo...");
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (item && changeTitle) {
      changeTitle(item, event.target.value);
    } else setCreatorTitle(event.target.value);
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      createTodo();
      disableInput();
    }
  };

  const completeTask = () => {
    if (item) {
      complete(item);
    }
  };
  const removeTask = () => {
    if (item) {
      remove(item);
    }
  };

  return (
    <div
      className={cn(
        "flex border-b border-[#393a4c] relative bg-[#25273C] p-4 rounded-md group text-[#cacde8] break-words pr-20",
        !darkMode && "bg-[#fafafa] border-[#e4e5f1]",
      )}>
      <button
        onClick={isCreator ? createTodo : completeTask}
        className={cn(
          "w-6 h-6 flex items-center justify-center mr-3 p-[2px] border-[1px] border-[#393a4c] hover:border-none hover:bg-gradient-to-r from-[#57ddff] to-[#c058f3] rounded-[50%]",
          item?.complete && "bg-gradient-to-r border-none",
          isCreator && "hover:bg-inherit",
          !darkMode && "border-[#e4e5f1]",
        )}>
        <div
          className={cn(
            "flex justify-center items-center w-5 h-5 bg-[#25273C] rounded-full",
            item?.complete && "bg-gradient-to-r",
            !darkMode && "bg-[#fafafa]",
          )}>
          {item?.complete ? (
            <img
              className='h-3 w-3'
              src='../assets/img/icon-check.svg'
              alt=''
            />
          ) : (
            ""
          )}
        </div>
      </button>
      {!isCreator ? (
        <button
          onClick={removeTask}
          className={cn("hidden absolute right-5 group-hover:block", device === "mobile" && "block")}>
          <img
            src='../assets/img/icon-cross.svg'
            alt=''
          />{" "}
        </button>
      ) : (
        ""
      )}

      {isEditing ? (
        <input
          ref={inputRef}
          onClick={enableInput}
          onChange={onChange}
          onBlur={disableInput}
          onKeyDown={onKeyDown}
          value={isCreator ? creatorTitle : item?.title}
          className={cn(
            "w-full h-full min-h-full bg-inherit text-xl break-all outline-none break-words",
            !darkMode && "text-[#484b6a] group-hover:text-[#5c5e83]",
          )}
        />
      ) : (
        <button
          onClick={item?.complete ? () => {} : enableInput}
          className={cn(
            "w-full h-full break-all min-h-full bg-inherit text-xl outline-none text-[#cacde8] text-left group-hover:text-[#e4e5f1] ",
            item?.complete && "text-[#777a92] group-hover:text-[#777a92] line-through",
            !darkMode && "text-[#484b6a] group-hover:text-[#5c5e83]",
            isCreator && "text-[#393a4c] group-hover:text-[#4d5066]",
          )}>
          {isCreator ? creatorTitle : item?.title}
        </button>
      )}
    </div>
  );
}
