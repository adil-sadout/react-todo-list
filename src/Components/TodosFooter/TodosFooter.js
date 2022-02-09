import TodosClear from "./TodosClear.js";
import TodosProgress from "./TodosProgress.js";

export default function TodosFooter(props) {

  const {todos, onClearTodos} = props;



  return (
    <div>
      <TodosProgress todos={todos} />
      <TodosClear onClearTodos={onClearTodos} />
    </div>
  );
}
