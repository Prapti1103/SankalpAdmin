import { useState } from "react";
import SchoolForm from "./SchoolForm";
import SchoolList from "./SchoolList";
import "./School.css";

const School = () => {
  // Temporary Data (Refresh ke baad remove ho jayega)
  const [schools, setSchools] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editingSchool, setEditingSchool] = useState(null);

  // Add School
  const handleAdd = () => {
    setEditingSchool(null);
    setShowForm(true);
  };

  // Edit School
  const handleEdit = (school) => {
    setEditingSchool(school);
    setShowForm(true);
  };

  // Save / Update School
  const handleSave = (data) => {
    if (editingSchool) {
      const updatedSchools = schools.map((school) =>
        school.id === editingSchool.id
          ? { ...data, id: editingSchool.id }
          : school
      );

      setSchools(updatedSchools);
    } else {
      const newSchool = {
        id: Date.now(),
        ...data,
      };

      setSchools((prev) => [...prev, newSchool]);
    }

    setEditingSchool(null);
    setShowForm(false);
  };

  // Delete School
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this school?"
    );

    if (!confirmDelete) return;

    setSchools((prev) => prev.filter((school) => school.id !== id));
  };

  // Cancel Form
  const handleCancel = () => {
    setEditingSchool(null);
    setShowForm(false);
  };

  return (
    <div className="school-page">
      {showForm ? (
        <SchoolForm
          school={editingSchool}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <SchoolList
          schools={schools}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default School;