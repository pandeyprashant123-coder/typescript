import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent<EventTarget>)=>void;
}
const InputField: React.FC<Props> = ({ todo, setTodo,handleAdd }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
    return (
    <form className="input" onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur();
        }}>
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter task"
        className="input__box"
        value={todo}
        onChange={
            (e)=>setTodo(e.target.value)
        }
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
