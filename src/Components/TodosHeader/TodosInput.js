
import {useState} from "react";
export default function TodosInput(props) {

  const [inputValue, setInputValue] = useState("")

  const{onAddTodo} = props;

    return (
      <div className="pb-2 d-flex justify-content-center">
        <input placeholder="ADD YOUR TODO" className=" mx-2 rounded" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button className="btn btn-warning btn-sm" onClick={()=>{
          onAddTodo(inputValue);
          setInputValue("");
        }} >+</button>
      </div>
    );
}