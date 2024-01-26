import { useState } from "react";
import uuid from "react-uuid";

function InputSection(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addHandler = () => {
    if (title === "" || content === "") {
      alert("Empty!");
    } else {
      const newToDo = {
        id: uuid(),
        title,
        content,
        isDone: false,
      };
      props.setToDo([...props.toDo, newToDo]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="input_component">
      <input
        value={title}
        placeholder="Insert your To Do title."
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        value={content}
        placeholder="Insert your To Do content."
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button
        onClick={() => {
          addHandler();
        }}
      >
        Add new To Do
      </button>
    </div>
  );
}

export default InputSection;
