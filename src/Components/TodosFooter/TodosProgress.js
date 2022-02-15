


export default function TodosProgress(props) {

    const {todosDoneCount, todos} = props;

    return (
      <div className="pt-3">
        <p className="h6" >Total Tasks: {todos.length}</p>
        <p className="h6" >Tasks left: {todos.length - todosDoneCount}</p>
      </div>
    );
}
