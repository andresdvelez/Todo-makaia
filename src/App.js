import React from "react";
import { Title } from "./components/title";
import { Todo } from "./components/todo";
import { TodoInput } from "./components/todoInput";
import { TodoList } from "./components/todoList";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput />
        <TodoList>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </TodoList>
      </div>
    </div>
  );
}

export default App;
