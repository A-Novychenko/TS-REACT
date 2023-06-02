import React, {useState} from "react";

import {TodoList} from "./components/Todolist";
import {AddTodo} from "./components/AddTodo";

import {IItem} from "./types/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  const todoAddHandler = (todo: IItem) => {
    setTodos((pS) => {
      return [
        ...pS,
        {
          id: Math.random().toString(),
          text: todo.text,
        },
      ];
    });
  };

  return (
    <>
      <TodoList items={todos} />
      <AddTodo onAddTodo={todoAddHandler} />
    </>
  );
};

export default App;
