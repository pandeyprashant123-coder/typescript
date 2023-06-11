import React, { ReactNode ,useState} from 'react';
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import "./App.css"
import { Todo } from './modern';

const  App: React.FC=()=> {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent<EventTarget>)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo, isDone:false}])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className="heading">Ta skify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
