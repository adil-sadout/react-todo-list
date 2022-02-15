

export default function TodosClear(props) {
  const {onClearTodos, setTodosDoneCount} = props
  function clearTodos(){
    setTodosDoneCount(0);
    onClearTodos();
  }
    return (
      <>
        <button  className="btn btn-danger" onClick={clearTodos} >Clear List</button>
      </>
    );
}