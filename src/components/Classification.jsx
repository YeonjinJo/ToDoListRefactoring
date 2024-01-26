import Cards from "./Cards";

function Classification(props) {
  return (
    <>
      {props.progress
        ? props.toDo.map((element) => {
            return element.isDone ? (
              <></>
            ) : (
              <Cards
                element={element}
                toDo={props.toDo}
                setToDo={props.setToDo}
              />
            );
          })
        : props.toDo.map((element) => {
            return element.isDone ? (
              <Cards
                element={element}
                toDo={props.toDo}
                setToDo={props.setToDo}
              />
            ) : (
              <></>
            );
          })}
    </>
  );
}

export default Classification;
