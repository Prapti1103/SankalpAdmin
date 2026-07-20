import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

function StudentList({ students, onEdit, onDelete }) {
  return (
    <div className="student-table">

      <table className="student-table-ui">

        <thead>

          <tr>

            <th>ID</th>
            <th>Student Name</th>
            <th>Mobile No</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Medium</th>
            <th>School</th>
            <th>District</th>
            <th>Taluka</th>
            <th>Exam Center</th>
            <th>Coordinator</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {students.length > 0 ? (

            students.map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.studentName}</td>

                <td>{item.mobile}</td>

                <td>{item.gender}</td>

                <td>{item.className}</td>

                <td>{item.medium}</td>

                <td>{item.schoolName}</td>

                <td>{item.district}</td>

                <td>{item.taluka}</td>

                <td>{item.examCenter}</td>

                <td>{item.coordinator}</td>

                <td>

                  <div className="action-buttons">

                    <button
                      className="edit-btn"
                      onClick={() => onEdit(item)}
                      title="Edit"
                    >
                      <BsPencilSquare />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(item.id)}
                      title="Delete"
                    >
                      <BsTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td colSpan="12" className="empty-data">

                No Student Found

              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default StudentList;