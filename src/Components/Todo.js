import TodoButtons from "./TodoButtons";
import {useState} from "react"

export default function Todos(props) {

    const {onTodoEdit, todo, onRemoveTodo} = props;
    const [isEditing, setIsEditing] = useState(false);

    return (
      <li>
        
            {
              (isEditing ===false) && <p>{todo.content}</p>
            }
        
        <TodoButtons isEditing={isEditing} setIsEditing={setIsEditing} onTodoEdit={onTodoEdit} todo={todo} id={todo.id} onRemoveTodo={onRemoveTodo}/>
      </li>
    );
}
