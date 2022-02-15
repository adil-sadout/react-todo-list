import {createContext } from "react";

const TodosContext = createContext();

function TodosCatContext(props){

    //const [todosCategory, setTodosCategory] = useState([]);



    return(
        <TodosContext.Provider value ="filler">
            {props.children}
        </TodosContext.Provider>
    )

}
export {TodosCatContext, TodosContext}