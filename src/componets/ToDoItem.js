import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkedTodoAction, editTodoAction,deletedAction } from "../Redux/actions/TodoAction";
import { AiTwotoneEdit } from "react-icons/ai";
import {IoCheckmarkDone} from 'react-icons/io5'
import{IoCloseSharp} from 'react-icons/io5'
import { motion } from "framer-motion";

const ToDoItem = ({ todo }) => {
  const textRef = useRef(true);
  const dispatch = useDispatch();

  const changeFocus = () => {
    textRef.current.disabled = false;
    textRef.current.focus();
  };
  const update = (e, id, value) => {
    if (e.key === "Enter") {
      dispatch(editTodoAction({ id, text: value }));
      textRef.current.disabled = true;
    }
  };

  return (
    <motion.i
      initial={{ x:'150vh' }}
      animate={{ x: 0 ,transition:{type:'spring',duration:3}}}
      whileHover={{scale:0.9,transition:{type:'spring',duration:0.5}}}
   
      exit={{x:'-80vw',transition:{type:'spring',duration:3},scale:[1,0]}}
      className="card"
    >
      <textarea
        onKeyPress={(e) => {
          update(e, todo.id, e.target.value);
        }}
        ref={textRef}
        disabled={textRef}
        defaultValue={todo.text}
      />
      <div className="btns-actions">
        <button onClick={changeFocus}>
          <AiTwotoneEdit />
        </button>
        <button onClick={()=>{dispatch(deletedAction(todo.id))}} className="close-btn">
          <IoCloseSharp/>
        </button>
        {!todo.checked && (
          <button
            style={{ color: "green" }}
            onClick={() => {
              dispatch(checkedTodoAction(todo.id));
            }}
          >
            <IoCheckmarkDone/>
          </button>
        )}
      </div>
      {todo.checked && <span className="done">done</span>}
    </motion.i>
  );
};

export default ToDoItem;
