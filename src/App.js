import { useEffect, useState } from "react";
import { Title } from "./components/title";
import { TodoInput } from "./components/todoInput";
import { TodoList } from "./components/todoList";
import { createTodo, deleteTodo, getTodo, updateTodo } from "./services";

function App() {
  const [todos, setTodos] = useState([]);

  const [activeFilter, setActiveFilter] = useState("all");

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (text) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      text,
      completed: false,
    };

    createTodo(newTodo, todos, setTodos);
  };

  const handleSetComplete = (id) => {
    const updatedTodos = todos.find((todo) => todo.id === id);
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    updateTodo(id, updatedTodos);
    setTodos(updatedList);
  };

  const handleClearComplete = () => {
    const updatedList = todos.filter((todo) => !todo.completed);
    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    deleteTodo(id, todos, setTodos);
  };

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  useEffect(() => {
    getTodo().then((data) => {
      setTodos(data);
      setFilteredTodos(data);
    });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList
          activeFilter={activeFilter}
          todos={filteredTodos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete}
        />
      </div>
    </div>
  );
}

export default App;
