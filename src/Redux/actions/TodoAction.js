export const todoAction = (data) =>(dispatch,getState)=> {
  dispatch( { type: "ADD_TODO", payload: data })
  localStorage.setItem('todoList',JSON.stringify(getState().todo))
};
export const checkedTodoAction=(id)=>(dispatch,getState)=>{
    
dispatch({
  type:'CHECK_TODO',
  payload:id
})
localStorage.setItem('todoList',JSON.stringify(getState().todo))

}
export const editTodoAction=(data)=>(dispatch,getState)=>{
  dispatch({type:'EDIT_TODO',payload:data})
localStorage.setItem('todoList',JSON.stringify(getState().todo))

}

export const deletedAction=(id)=>(dispatch,getState)=>{
  dispatch({type:'DELETE_TODO',payload:id})
localStorage.setItem('todoList',JSON.stringify(getState().todo))
}