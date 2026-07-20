import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

const SchoolList = ({ schools, onAdd, onEdit, onDelete }) => {
  const [search, setSearch] = useState("");

  const filteredSchools = schools.filter((school) => {
    const keyword = search.toLowerCase();

    return (
      school.schoolName.toLowerCase().includes(keyword) ||
      school.village.toLowerCase().includes(keyword) ||
      school.address.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="school-page">
      {/* Toolbar */}

      <div className="school-toolbar">
        <Button className="create-btn" onClick={onAdd}>
          <FaPlus className="me-2" />
          Add School
        </Button>

        <div className="search-box">
          <FaSearch className="search-icon" />

          <Form.Control
            type="text"
            placeholder="Search School..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}

      <Card className="school-card">
        <Card.Header className="school-header">
          School List
        </Card.Header>

        <Card.Body>
          <div className="school-table">

            <table className="school-table-ui">

              <thead>

                <tr>
                  <th>ID</th>
                  <th>School Name</th>
                  <th>Village</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {filteredSchools.length > 0 ? (
                  filteredSchools.map((school, index) => (

                    <tr key={school.id}>

                      <td>{index + 1}</td>

                      <td>{school.schoolName}</td>

                      <td>{school.village}</td>

                      <td>{school.address}</td>

                      <td>

                        <div className="action-buttons">

                          <button
                            className="edit-btn"
                            onClick={() => onEdit(school)}
                          >
                            <FaEdit />
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() => onDelete(school.id)}
                          >
                            <FaTrash />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))
                ) : (

                  <tr>

                    <td colSpan="5" className="empty-data">
                      No School Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SchoolList;