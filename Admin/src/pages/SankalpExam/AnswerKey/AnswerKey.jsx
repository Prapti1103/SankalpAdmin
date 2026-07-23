import { useState } from "react";
import AnswerKeyList from "./AnswerKeyList";
import AnswerKeyForm from "./AnswerKeyForm";

function AnswerKey() {
  const [showModal, setShowModal] = useState(false);

  const [answerKeys, setAnswerKeys] = useState([]);

  const [editData, setEditData] = useState(null);

  return (
    <>
      <AnswerKeyList
        answerKeys={answerKeys}
        setAnswerKeys={setAnswerKeys}
        setShowModal={setShowModal}
        setEditData={setEditData}
      />

      <AnswerKeyForm
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditData(null);
        }}
        answerKeys={answerKeys}
        setAnswerKeys={setAnswerKeys}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}

export default AnswerKey;