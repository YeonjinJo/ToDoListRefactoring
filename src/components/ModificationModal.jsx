import { useState } from "react";

function ModificationModal(props) {
  const [modifiedTitle, setModifiedTitle] = useState("");
  const [modifiedContent, setModifiedContent] = useState("");

  const modifyHandler = (id) => {
    if (modifiedTitle === "" || modifiedContent === "") {
      alert("Nothing is modified! Try again.");
      props.setModalOpen(true);
    } else {
      props.toDo.forEach((element, index) => {
        if (element.id === id) {
          props.toDo.splice(index, 1);
          const newToDo = {
            id: element.id,
            title: modifiedTitle,
            content: modifiedContent,
            isDone: element.isDone,
          };
          props.setToDo([...props.toDo, newToDo]);
          setModifiedTitle("");
          setModifiedContent("");
          alert("To Do is modified!");
        }
      });
      props.setModalOpen(false);
    }
  };

  return (
    props.modalOpen && (
      <div className="modal_container">
        <div className="modal_content">
          <input
            value={modifiedTitle}
            placeholder="Modify your To Do title."
            onChange={(event) => {
              setModifiedTitle(event.target.value);
            }}
          />
          <input
            value={modifiedContent}
            placeholder="Modify your To Do content."
            onChange={(event) => {
              setModifiedContent(event.target.value);
            }}
          />{" "}
          <button
            className="modalModifyButton"
            onClick={() => {
              modifyHandler(props.id);
            }}
          >
            Modify
          </button>
          <button
            className="modalCloseButton"
            onClick={() => {
              props.setModalOpen(false);
              alert("Cancelled!")
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
}

export default ModificationModal;
