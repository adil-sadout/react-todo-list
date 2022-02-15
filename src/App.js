
import TodosWrapper from "./Components/TodosWrapper";
import {TodosCatContext} from "./TodosCatContext";

export default function App() {
  return (
    <TodosCatContext>
      <div className="container bg-dark bg-opacity-25 border-0 rounded text-center mt-5 p-5 border">
        <TodosWrapper/>
      </div>
    </TodosCatContext>
  );
}
