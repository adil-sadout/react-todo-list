

export default function TodosClear(props) {
  const {onClearTodos} = props
    return (
      <>
        <button onClick={onClearTodos} >Clear List</button>
      </>
    );
}