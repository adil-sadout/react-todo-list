


export default function TodosProgress(props) {

  const {todos} = props;

    return (
      <>
        <p>You currently have {todos.length} things to do</p>
      </>
    );
}
