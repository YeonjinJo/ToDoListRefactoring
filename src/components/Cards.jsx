import CheckHandler from "./CheckHandler";
import ModifyHandler from "./ModifyHandler";
import RemoveHandler from "./RemoveHandler";

function Cards(props) {
  return (
    <ul>
      <h3>Title : {props.element.title}</h3>
      <p>Content : {props.element.content}</p>
      <CheckHandler
        num={props.element}
        toDo={props.toDo}
        setToDo={props.setToDo}
      />
      <ModifyHandler
        num={props.element}
        toDo={props.toDo}
        setToDo={props.setToDo}
      />
      <RemoveHandler
        num={props.element}
        toDo={props.toDo}
        setToDo={props.setToDo}
      />
    </ul>
  );
}

export default Cards;

