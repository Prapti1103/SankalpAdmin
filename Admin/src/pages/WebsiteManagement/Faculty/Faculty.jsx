import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsPlusCircle, BsArrowLeft } from "react-icons/bs";
import "./Faculty.css";

import FacultyForm from "./FacultyForm";
import FacultyList from "./FacultyList";

function Faculty() {
  const [showForm, setShowForm] = useState(false);
  const [faculties, setFaculties] = useState([]);
  const [editFaculty, setEditFaculty] = useState(null);

  // Open Create Form
  const handleCreate = () => {
    setEditFaculty(null);
    setShowForm(true);
  };

  // Close Form
  const handleCancel = () => {
    setShowForm(false);
    setEditFaculty(null);
  };

  // Save / Update Faculty
  const handleSave = (formData) => {
    if (editFaculty) {
      const updatedFaculty = faculties.map((faculty) =>
        faculty.id === editFaculty.id
          ? {
              ...formData,
              id: editFaculty.id,
            }
          : faculty
      );

      setFaculties(updatedFaculty);
    } else {
      const newFaculty = {
        id:
          faculties.length === 0
            ? 1
            : Math.max(...faculties.map((item) => item.id)) + 1,
        ...formData,
      };

      setFaculties((prev) => [newFaculty, ...prev]);
    }

    setShowForm(false);
    setEditFaculty(null);
  };

  // Edit Faculty
  const handleEdit = (faculty) => {
    setEditFaculty(faculty);
    setShowForm(true);
  };

  // Delete Faculty
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this faculty?"
    );

    if (!confirmDelete) return;

    setFaculties((prev) =>
      prev.filter((faculty) => faculty.id !== id)
    );
  };

  return (
    <div className="faculty-page">

      {!showForm ? (
        <>
          {/* Toolbar */}

          <div className="faculty-toolbar">

            <Button
              className="create-btn"
              onClick={handleCreate}
            >
              <BsPlusCircle className="me-2" />
              Add Faculty
            </Button>

          </div>

          {/* Faculty Table */}

          <FacultyList
            faculties={faculties}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

        </>
      ) : (
        <>
          {/* Back Button */}

          <Button
            variant="secondary"
            className="mb-4"
            onClick={handleCancel}
          >
            <BsArrowLeft className="me-2" />
            Back
          </Button>

          {/* Faculty Form */}

          <FacultyForm
            faculty={editFaculty}
            onSave={handleSave}
            onCancel={handleCancel}
          />

        </>
      )}

    </div>
  );
}

export default Faculty;