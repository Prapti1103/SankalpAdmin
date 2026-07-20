import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsPlusCircle, BsArrowLeft } from "react-icons/bs";
import "./Student.css";

import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Student() {
  const [showForm, setShowForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  // Open Create Form
  const handleCreate = () => {
    setEditStudent(null);
    setShowForm(true);
  };

  // Back to Table
  const handleCancel = () => {
    setShowForm(false);
    setEditStudent(null);
  };

  // Save / Update Student
  const handleSave = (formData) => {
    if (editStudent) {
      const updatedStudents = students.map((student) =>
        student.id === editStudent.id
          ? {
              ...formData,
              id: editStudent.id,
            }
          : student
      );

      setStudents(updatedStudents);
    } else {
      const newStudent = {
        id:
          students.length === 0
            ? 1
            : Math.max(...students.map((item) => item.id)) + 1,
        ...formData,
      };

      setStudents((prev) => [newStudent, ...prev]);
    }

    setShowForm(false);
    setEditStudent(null);
  };

  // Edit Student
  const handleEdit = (student) => {
    setEditStudent(student);
    setShowForm(true);
  };

  // Delete Student
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <div className="student-page">
      {!showForm ? (
        <>
          {/* Toolbar */}

          <div className="student-toolbar">
            <Button className="create-btn" onClick={handleCreate}>
              <BsPlusCircle className="me-2" />
              Create Student
            </Button>
          </div>

          {/* Student List */}

          <StudentList
            students={students}
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

          {/* Student Form */}

          <StudentForm
            student={editStudent}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </>
      )}
    </div>
  );
}

export default Student;