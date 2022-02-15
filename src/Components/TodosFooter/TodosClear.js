

export default function TodosClear(props) {
  const {onClearTodos} = props
    return (
      <>
        <button  className="btn btn-danger" onClick={onClearTodos} >Clear List</button>
      </>
    );
}