import { useState } from "react";
import ResultCheckList from "./ResultCheckList";
import ResultCheckForm from "./ResultCheckForm";

function ResultCheck() {

  const [showModal, setShowModal] = useState(false);

  const [resultChecks, setResultChecks] = useState([]);

  const [editData, setEditData] = useState(null);

  return (
    <>
      <ResultCheckList
        resultChecks={resultChecks}
        setResultChecks={setResultChecks}
        setShowModal={setShowModal}
        setEditData={setEditData}
      />

      <ResultCheckForm
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditData(null);
        }}
        resultChecks={resultChecks}
        setResultChecks={setResultChecks}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}

export default ResultCheck;