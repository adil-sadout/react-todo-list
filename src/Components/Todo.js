import TodoButtons from "./TodoButtons";

export default function Todos(props) {

    const {onTodoEdit, todo, onRemoveTodo} = props;
    return (
      <li>
        <>{todo.content}</>
        <TodoButtons onTodoEdit={onTodoEdit} todo={todo} id={todo.id} onRemoveTodo={onRemoveTodo}/>
      </li>
    );
}
