import React, {useState} from "react";
// import { Route } from "react-router-dom";

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

  const todoRemoveHandler = (id: string) => {
    setTodos((pS) => {
      return pS.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      {/* <Route></Route> */}
      <TodoList items={todos} todoRemoveHandler={todoRemoveHandler} />
      <AddTodo onAddTodo={todoAddHandler} />
    </>
  );
};

export default App;
