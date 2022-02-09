import {useState} from "react"

export default function TodosButtons(props) {

    const {isEditing, setIsEditing, onTodoEdit, id, onRemoveTodo, todo} = props;
    
    const [newContent, setNewContent] = useState(todo.content)

    return (
      <>
        {
          (isEditing === false)?
          <button onClick={()=>setIsEditing(true)} >Edit</button>:
          <>
            <input type="text" placeholder={todo.content} value={newContent} onChange={(e)=> setNewContent(e.target.value)} />
            <button onClick={()=>{
              setIsEditing(false);
              onTodoEdit(newContent, id);
              }}>Done</button>
          </>
          
        }
        
        <button onClick={()=> onRemoveTodo(id)} >Delete</button>
      </>
    );
}
