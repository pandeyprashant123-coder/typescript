import React from 'react'
import "./style.css";
import { Todo } from '../modern';

interface Props{
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
        {

        }
    </div>
  )
}

export default TodoList