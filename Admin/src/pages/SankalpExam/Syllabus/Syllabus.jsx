import { useState } from "react";
import SyllabusList from "./SyllabusList";
import SyllabusForm from "./SyllabusForm";

function Syllabus() {

  const [showModal, setShowModal] = useState(false);

  const [syllabus, setSyllabus] = useState([]);

  const [editData, setEditData] = useState(null);

  return (
    <>
      <SyllabusList
        syllabus={syllabus}
        setSyllabus={setSyllabus}
        setShowModal={setShowModal}
        setEditData={setEditData}
      />

      <SyllabusForm
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditData(null);
        }}
        syllabus={syllabus}
        setSyllabus={setSyllabus}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}

export default Syllabus;