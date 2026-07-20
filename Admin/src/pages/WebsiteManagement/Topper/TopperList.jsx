import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

function TopperList({ toppers, onEdit, onDelete }) {
  return (
    <div className="topper-table">
      <table className="topper-table-ui">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Total Marks</th>
            <th>Post</th>
            <th>Rank</th>
            <th>Year</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {toppers.length > 0 ? (
            toppers.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                <td>{item.studentName}</td>

                <td>{item.marks}</td>

                <td>{item.className}</td>

                <td>{item.rank}</td>

                <td>{item.year}</td>

                <td>
                  {item.photo ? (
                    <img
                      src={
                        typeof item.photo === "string"
                          ? item.photo
                          : URL.createObjectURL(item.photo)
                      }
                      alt={item.studentName}
                      className="table-image"
                    />
                  ) : (
                    <span className="no-image">
                      No Image
                    </span>
                  )}
                </td>

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
              <td colSpan="8" className="empty-data">
                No Topper Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TopperList;