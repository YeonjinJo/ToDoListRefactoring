function RemoveHandler(props) {
  const removeHandler = (id) => {
    const newList = props.toDo.filter((index) => index.id !== id);
    props.setToDo(newList);

    alert("To Do is removed")
  };

  return (
    <button
      onClick={() => {
        window.confirm("Are you sure to remove this To Do?")
          ? removeHandler(props.num.id)
          : alert("Cancelled");
      }}
    >
      Remove
    </button>
  );
}

export default RemoveHandler;

