import TodoButtons from "./TodoButtons";
import {useState} from "react"

export default function Todos(props) {

    const {onTodoEdit, todo, onRemoveTodo, setTodosDoneCount, todosDoneCount} = props;
    const [isEditing, setIsEditing] = useState(false);
    const [todoClass, setTodoClass] = useState("")
    const [todoDone, setTodoDone] = useState(false)

    function toggleTodoClass(e){
      if(e.target.checked ===true){
        setTodoClass("text-decoration-line-through")
        setTodoDone(true)
        setTodosDoneCount(todosDoneCount+1)
      }else{
        setTodoClass("")
        setTodoDone(false)
        setTodosDoneCount(todosDoneCount-1)
      }
    }

    return (
      <li className="list-group-item d-flex mb-1 rounded align-items-center justify-content-center py-2 m-auto bg-dark bg-opacity-25">
        
            {
              (isEditing ===false) && 
              <>
                <input type="checkbox" className="col-2" onClick={toggleTodoClass} />
                <p className={todoClass + " h4  p-2 text-center col-8 text-break"} >{todo.content}</p>
              </>
              
            }
        
        <TodoButtons todoDone={todoDone} isEditing={isEditing} setIsEditing={setIsEditing} onTodoEdit={onTodoEdit} todo={todo} id={todo.id} onRemoveTodo={onRemoveTodo}/>
      </li>
    );
}
