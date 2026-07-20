import { Card, Table, Button } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

function FacultyList({ faculties, onEdit, onDelete }) {
  return (
    <Card className="faculty-table-card shadow-sm">
      <Card.Body className="p-0">
        <Table hover responsive className="align-middle mb-0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Faculty Image</th>
              <th>Faculty Name</th>
              <th>Experience</th>
              <th>Subject</th>
              <th>Education</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {faculties.length > 0 ? (
              faculties.map((faculty, index) => (
                <tr key={faculty.id}>
                  <td>{index + 1}</td>

                  <td>
                    {faculty.photo ? (
                      <img
                        src={
                          typeof faculty.photo === "string"
                            ? faculty.photo
                            : URL.createObjectURL(faculty.photo)
                        }
                        alt="Faculty"
                        className="faculty-table-image"
                      />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>

                  <td>{faculty.facultyName}</td>

                  <td>{faculty.experience}</td>

                  <td>{faculty.subject}</td>

                  <td>{faculty.education}</td>

                  <td
                    style={{
                      maxWidth: "250px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {faculty.description}
                  </td>

                  <td>
                    <Button
                      variant="link"
                      className="text-primary"
                      onClick={() => onEdit(faculty)}
                    >
                      <BsPencilSquare size={18} />
                    </Button>

                    <Button
                      variant="link"
                      className="text-danger"
                      onClick={() => onDelete(faculty.id)}
                    >
                      <BsTrash size={18} />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  No Faculty Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default FacultyList;