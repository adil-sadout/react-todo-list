import Todos from "./Todos.js";
import TodosHeader from "./TodosHeader/TodosHeader.js";
import TodosFooter from "./TodosFooter/TodosFooter.js";
import {useState, useEffect} from "react";

export default function TodosWrapper() {


    //States

    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);



    //*Functions


    function addTodo(e){
        setTodos([...todos, {
            id:todos.length+1,
            content:e
        }]);

    }
        
    function removeTodo(id){
        const todoRemoved = todos.filter(todo => todo.id !== id);
        setTodos(todoRemoved);

    }

    function clearTodos(){
        setTodos([]);

    }

    function todoEdit(content, id){
        const editedTodo = todos.find(todo => todo.id == id);
        editedTodo.content = content
        setTodos([...todos]);

    }
    

   

    ///UseEffect


    


    ///Return

    return (
        <>
            <TodosHeader onAddTodo={addTodo} />
            <Todos onTodoEdit={todoEdit} todos={todos} onRemoveTodo={removeTodo}/>
            <TodosFooter todos={todos} onClearTodos={clearTodos} />
        </>
    );
}
