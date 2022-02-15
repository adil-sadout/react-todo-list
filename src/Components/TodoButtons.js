import {useState} from "react"

export default function TodosButtons(props) {

    const {isEditing, setIsEditing, onTodoEdit, id, onRemoveTodo, todo, todoDone} = props;
    
    const [newContent, setNewContent] = useState(todo.content)

    return (
      <div className="col-2 d-flex justify-content-center align-items-center flex-column">
        {
          (isEditing === false)?
          <button className="btn btn-warning m-1" disabled={todoDone} onClick={()=>setIsEditing(true)} >Edit</button>:
          <span>
            <input className="text-center" disabled={todoDone} type="text" placeholder={todo.content} value={newContent} onChange={(e)=> setNewContent(e.target.value)} />
            <button className="btn btn-warning m-1" disabled={todoDone} onClick={()=>{
              setIsEditing(false);
              onTodoEdit(newContent, id);
              }}>Done</button>
          </span>
          
        }
        
        <button className="btn btn-warning" disabled={todoDone} onClick={()=> onRemoveTodo(id)} >Delete</button>
      </div>
    );
}
