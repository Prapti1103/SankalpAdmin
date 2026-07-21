import { useState } from "react";
import GalleryList from "./GalleryList";
import GalleryForm from "./GalleryForm";

function Gallery() {
  const [showModal, setShowModal] = useState(false);

  const [gallery, setGallery] = useState([]);

  const [editData, setEditData] = useState(null);

  return (
    <>
      <GalleryList
        gallery={gallery}
        setGallery={setGallery}
        setShowModal={setShowModal}
        setEditData={setEditData}
      />

      <GalleryForm
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditData(null);
        }}
        gallery={gallery}
        setGallery={setGallery}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}

export default Gallery;