import React, { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Header from "./components/header";
import useDevice from "./hooks/useDevice";
import TodoList from "./components/todoList";
import { ThemeContext } from "./hooks/useTheme";
import TodoContextProvider from "./components/context/TodoContextProvider";
import { cn } from "./utils/utils";

function App() {
  const [darkMode, toggleDarkMode] = useState(true);
  const device = useDevice();

  return (
    <TodoContextProvider>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <div className='App'>
          <Background>
            <div
              className={cn(
                device === "desktop" && " w-[550px]",
                device === "mobile" && "min-w-[300px] w-[100%] max-w-[500px]",
              )}>
              <Header />
              <TodoList />
            </div>
          </Background>
        </div>
      </ThemeContext.Provider>
    </TodoContextProvider>
  );
}

export default App;
