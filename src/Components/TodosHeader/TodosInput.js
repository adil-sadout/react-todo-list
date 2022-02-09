
import {useState} from "react";
export default function TodosInput(props) {

  const [inputValue, setInputValue] = useState("")

  const{onAddTodo} = props;

    return (
      <>
        <input placeholder="ADD YOUR TODO" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button onClick={()=>{
          onAddTodo(inputValue);
          setInputValue("");
        }} >+</button>
      </>
    );
}