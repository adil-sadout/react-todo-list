import TodosClear from "./TodosClear.js";
import TodosProgress from "./TodosProgress.js";

export default function TodosFooter(props) {

  const {todos, onClearTodos, todosDoneCount} = props;



  return (
    <div>
      <TodosProgress todos={todos} todosDoneCount={todosDoneCount} />
      <TodosClear onClearTodos={onClearTodos} />
    </div>
  );
}
