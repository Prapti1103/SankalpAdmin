import { useState } from "react";
import AwardForm from "./AwardForm";
import AwardList from "./AwardList";

function Award() {
  const [showModal, setShowModal] = useState(false);

  const [awards, setAwards] = useState([]);

  const [editData, setEditData] = useState(null);

  return (
    <>
      <AwardList
        awards={awards}
        setAwards={setAwards}
        setShowModal={setShowModal}
        setEditData={setEditData}
      />

      <AwardForm
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditData(null);
        }}
        awards={awards}
        setAwards={setAwards}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}

export default Award;