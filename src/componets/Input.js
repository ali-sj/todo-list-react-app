import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoAction } from '../Redux/actions/TodoAction'
import { motion } from 'framer-motion';
import { GoPlus } from 'react-icons/go';

const Input = () => {
  const inputRef=useRef()

  useEffect(()=>{
    document.addEventListener('keypress',(e)=>{
      if(e.key==='Enter'){
        inputRef.current.click()
      }
    })

  },[])
    const todoList=useSelector(state=>state.todo)
    const dispatch=useDispatch()
    const[text,setText]=useState('')
    const data={id:Math.floor(Math.random()*1000),text,checked:false}
    console.log(todoList);
    
  return (
    <div>
 
        <input className='search' value={text} onChange={(e)=>{setText(e.target.value)}} type='text' placeholder='Add to do...'/>
        <motion.button   whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className='add-btn' ref={inputRef}  onClick={()=>{
          if(text){
                    dispatch(todoAction(data))
        setText('')
          }else(setText(''))
  

        }}><GoPlus/></motion.button>
      
    </div>
  )
}

export default Input
