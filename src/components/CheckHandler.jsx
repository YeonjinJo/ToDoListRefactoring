function CheckHandler(props) {
  const checkHandler = (id) => {
    props.toDo.forEach((element, index) => {
      if (element.id === id) {
        props.toDo.splice(index, 1);
        const newToDo = {
          id: element.id,
          title: element.title,
          content: element.content,
          isDone: element.isDone ? false : true,
        };
        props.setToDo([...props.toDo, newToDo]);
      }
    });
  };

  return (
    <button onClick={() => checkHandler(props.num.id)}>
      {props.num.isDone ? "Cancel" : "Complete"}
    </button>
  );
}

export default CheckHandler;
