import Todo from "./Todo.js";

export default function Todos(props) {
    const {onTodoEdit, todos, onRemoveTodo, setTodosDoneCount, todosDoneCount} = props;

    return (
      <div className="grid ">
        <ul className="list-group d-flex row">
        
        {
            todos.map(todo => <Todo key={todo.id}  setTodosDoneCount={setTodosDoneCount} todosDoneCount={todosDoneCount} onTodoEdit={onTodoEdit} todo={todo} onRemoveTodo={onRemoveTodo}/>)
        }
        </ul>
        
      </div>
    );
}