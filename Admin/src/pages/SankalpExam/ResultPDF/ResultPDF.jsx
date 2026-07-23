import { useState } from "react";
import ResultPDFList from "./ResultPDFList";
import ResultPDFForm from "./ResultPDFForm";

function ResultPDF() {
  const [showModal, setShowModal] = useState(false);

  const [resultPDFs, setResultPDFs] = useState([]);

  const [editData, setEditData] = useState(null);

  return (
    <>
      <ResultPDFList
        resultPDFs={resultPDFs}
        setResultPDFs={setResultPDFs}
        setShowModal={setShowModal}
        setEditData={setEditData}
      />

      <ResultPDFForm
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditData(null);
        }}
        resultPDFs={resultPDFs}
        setResultPDFs={setResultPDFs}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}

export default ResultPDF;