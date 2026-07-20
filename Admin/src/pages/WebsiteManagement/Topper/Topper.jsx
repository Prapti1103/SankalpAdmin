import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsPlusCircle, BsArrowLeft } from "react-icons/bs";
import "./Topper.css";

import TopperForm from "./TopperForm";
import TopperList from "./TopperList";

function Topper() {
  const [showForm, setShowForm] = useState(false);
  const [toppers, setToppers] = useState([]);
  const [editTopper, setEditTopper] = useState(null);

  // Create Topper
  const handleCreate = () => {
    setEditTopper(null);
    setShowForm(true);
  };

  // Back
  const handleCancel = () => {
    setShowForm(false);
    setEditTopper(null);
  };

  // Save / Update
  const handleSave = (formData) => {
    if (editTopper) {
      // Update
      const updatedData = toppers.map((item) =>
        item.id === editTopper.id
          ? {
              ...formData,
              id: editTopper.id,
            }
          : item
      );

      setToppers(updatedData);
    } else {
      // Create
      const topper = {
  id: toppers.length === 0 ? 1 : Math.max(...toppers.map(item => item.id)) + 1,
  ...formData,
};

      setToppers((prev) => [topper, ...prev]);
    }

    setShowForm(false);
    setEditTopper(null);
  };

  // Edit
  const handleEdit = (topper) => {
    setEditTopper(topper);
    setShowForm(true);
  };

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this topper?"
    );

    if (!confirmDelete) return;

    setToppers((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="topper-page">
      {!showForm ? (
        <>
          {/* Toolbar */}

          <div className="topper-toolbar">
            <Button className="create-btn" onClick={handleCreate}>
              <BsPlusCircle className="me-2" />
              Create Topper
            </Button>

            {/* <div className="topper-color">
              <label>Topper Color :</label>
              <input type="color" defaultValue="#f5a623" />
            </div> */}
          </div>

          {/* Topper List */}

          <TopperList
            toppers={toppers}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </>
      ) : (
        <>
          <Button
            variant="secondary"
            className="mb-4"
            onClick={handleCancel}
          >
            <BsArrowLeft className="me-2" />
            Back
          </Button>

          <TopperForm
            topper={editTopper}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </>
      )}
    </div>
  );
}

export default Topper;