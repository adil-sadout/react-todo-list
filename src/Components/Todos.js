import Todo from "./Todo.js";

export default function Todos(props) {
    const {onTodoEdit, todos, onRemoveTodo} = props;

    return (
      <div>
        <ul>
        
        {
            todos.map(todo => <Todo key={todo.id} onTodoEdit={onTodoEdit} todo={todo} onRemoveTodo={onRemoveTodo}/>)
        }
        </ul>
        
      </div>
    );
}