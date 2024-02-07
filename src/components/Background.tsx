import React from "react";
import { cn } from "../utils/utils";
import { useDarkContext } from "../hooks/useTheme";
import useDevice from "../hooks/useDevice";
type Props = {
  children: React.ReactNode;
};

export default function Background({ children }: Props) {
  const device = useDevice();
  const { darkMode } = useDarkContext();
  return (
    <div className={cn("min-h-screen w-full relative bg-[#161722] flex z-0", !darkMode && "bg-[#e4e5f1]")}>
      <img
        className='h-[35vh] absolute w-full transition-all pointer-events-none select-none'
        src={`../assets/img/bg-${device}-${darkMode ? "dark" : "light"}.jpg`}
        alt=''
      />
      <div className={cn(`flex mt-36 items-center flex-col w-full`, device === "mobile" && "px-4")}>{children}</div>
    </div>
  );
}
