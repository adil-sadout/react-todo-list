
import TodosInput from "./TodosInput";

export default function TodosHeader(props) {

    const{onAddTodo} = props;


    return (
        <div>
            <h1>Todo List</h1>
            <TodosInput onAddTodo={onAddTodo} />
        </div>
    );
}