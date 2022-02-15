import TodosClear from "./TodosClear.js";
import TodosProgress from "./TodosProgress.js";

export default function TodosFooter(props) {

  const {todos, onClearTodos, todosDoneCount, setTodosDoneCount} = props;

  

  return (
    <div>
      <TodosProgress todos={todos} todosDoneCount={todosDoneCount} />
      <TodosClear  setTodosDoneCount={setTodosDoneCount} onClearTodos={onClearTodos} />
    </div>
  );
}
