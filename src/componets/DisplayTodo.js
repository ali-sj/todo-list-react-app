import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";


const DisplayTodo = () => {
  const [Action, setAction] = useState("Active");
  const todoList = useSelector((state) => state.todo);
  console.log(Action);

  return (
    <div className="all-display">
      <div className="display-btns">
        <button
          onClick={() => {
            setAction("Active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            setAction("Completed");
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            setAction("All");
          }}
        >
          All
        </button>
      </div>
      <ul className="container-display">
        <AnimatePresence>
{Action === "Active"
          ? todoList
              .filter((todo) => {
                return todo.checked === false;
              })
              .map((todo) => {
                return <ToDoItem key={todo.id}  todo={todo} />;
              })
          : Action === "Completed"
          ? todoList
              .filter((todo) => {
                return todo.checked === true;
              })
              .map((todo) => {
                return <ToDoItem  key={todo.id} todo={todo} />;
              })
          : Action === "All"
          ? todoList.map((todo) => {
              return <ToDoItem  key={todo.id} todo={todo} />;
            })
          : ""}

        </AnimatePresence>
        
      </ul>
    </div>
  );
};

export default DisplayTodo;
