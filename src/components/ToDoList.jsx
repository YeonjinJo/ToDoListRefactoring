import Classification from "./Classification";

function ToDoList(props) {
  return (
    <div className="to_do_list_container">
      <h2>{props.progress ? "On Progress" : "Done"}</h2>
      <div className="list_box">
        <Classification
          toDo={props.toDo}
          setToDo={props.setToDo}
          progress={props.progress}
        />
      </div>
    </div>
  );
}

export default ToDoList;

