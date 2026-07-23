import { useState } from "react";
import ServiceList from "./ServiceList";
import ServiceForm from "./ServiceForm";

function Service() {

  const [showModal, setShowModal] = useState(false);

  const [services, setServices] = useState([]);

  const [editData, setEditData] = useState(null);

  return (
    <>
      <ServiceList
        services={services}
        setServices={setServices}
        setShowModal={setShowModal}
        setEditData={setEditData}
      />

      <ServiceForm
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditData(null);
        }}
        services={services}
        setServices={setServices}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}

export default Service;