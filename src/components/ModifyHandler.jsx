import { useState } from "react";
import ModificationModal from "./ModificationModal";

function ModifyHandler(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const modifyModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button onClick={() => modifyModalOpen()}>Modify</button>
      <ModificationModal
        toDo={props.toDo}
        setToDo={props.setToDo}
        id={props.num.id}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

export default ModifyHandler;

