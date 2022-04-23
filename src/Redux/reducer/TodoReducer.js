export const todoReducer=(state=[],{type,payload})=>{
    switch(type){
        case 'ADD_TODO':
            return [...state,{...payload}]
        case'CHECK_TODO':
        const id=payload
        const maped=state.map(todo=>{return todo.id===id?{...todo,checked:true}:todo})
        return maped
        case 'EDIT_TODO':
            const editMapped=state.map(todo=>{return todo.id===payload.id?{...todo,text:payload.text}:todo})
            return editMapped
            case 'DELETE_TODO':
                const filtered=state.filter(todo=>{return todo.id!==payload})
                return filtered
         default:
             return state   
    }
}