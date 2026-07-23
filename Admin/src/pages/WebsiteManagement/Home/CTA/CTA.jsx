import { useState } from "react";
import CTAList from "./CTAList";
import CTAForm from "./CTAForm";

function CTA() {

  const [showModal, setShowModal] = useState(false);

  const [ctas, setCtas] = useState([]);

  const [editData, setEditData] = useState(null);

  return (
    <>
      <CTAList
        ctas={ctas}
        setCtas={setCtas}
        setShowModal={setShowModal}
        setEditData={setEditData}
      />

      <CTAForm
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditData(null);
        }}
        ctas={ctas}
        setCtas={setCtas}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}

export default CTA;