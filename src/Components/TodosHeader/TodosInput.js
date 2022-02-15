
import {useState} from "react";
export default function TodosInput(props) {

  const [inputValue, setInputValue] = useState("")

  const{onAddTodo} = props;

  function fetchData(){
    onAddTodo(inputValue);
    setInputValue("");
  }

  function keyboardClick(event){
    if (event.key === "Enter") {
      fetchData()
    }

  }

    return (
      <div className="pb-2 d-flex justify-content-center">
        <input placeholder="ADD YOUR TODO"  onKeyDown={keyboardClick} className=" mx-2 rounded" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button className="btn btn-warning btn-sm" onClick={fetchData} >+</button>
      </div>
    );
}