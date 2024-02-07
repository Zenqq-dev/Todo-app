import React from "react";
import { cn } from "../utils/utils";
import { useDarkContext } from "../hooks/useTheme";
import useDevice from "../hooks/useDevice";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkContext();
  const device = useDevice();
  const switchTheme = () => {
    toggleDarkMode(!darkMode);
  };
  return (
    <div className='flex justify-between z-1 relative items-center text-center w-full'>
      <h1
        className={cn(
          "text-5xl pointer-events-none select-none",
          darkMode ? "text-white" : "text-black",
          device === "mobile" && "text-4xl",
        )}>
        T O D O
      </h1>
      <button className='h-7 w-7 '>
        <img
          src={darkMode ? `../assets/img/icon-sun.svg` : `../assets/img/icon-moon.svg`}
          alt=''
          onClick={switchTheme}
          className='select-none'
        />
      </button>
    </div>
  );
}
