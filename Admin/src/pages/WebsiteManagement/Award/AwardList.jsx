import { Card, Button } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./Award.css";

function AwardList({
  awards,
  setShowModal,
  setEditData,
  setAwards,
}) {

  // Delete Award
  const handleDelete = (id) => {
    if (window.confirm("Delete this Award?")) {
      setAwards((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  // Edit Award
  const handleEdit = (award) => {
    setEditData(award);
    setShowModal(true);
  };

  return (
    <div className="award-page">

      {/* Top Button */}

      <div className="award-toolbar">

        <Button
          className="create-btn"
          onClick={() => {
            setEditData(null);
            setShowModal(true);
          }}
        >
          <FaPlus className="me-2" />
          Add Award
        </Button>

      </div>

      {/* Award Table */}

      <Card className="award-card">

        <Card.Header className="award-header">
          Award List
        </Card.Header>

        <Card.Body>

          <div className="award-table">

            <table className="award-table-ui">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Award Title</th>

                  <th>Image</th>

                  <th>Awarded By</th>

                  <th>Awarded To</th>

                  <th>Year</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {awards.length > 0 ? (

                  awards.map((award, index) => (

                    <tr key={award.id}>

                      <td>{index + 1}</td>

                      <td>{award.awardTitle}</td>

                      <td>

                        <img
                          src={award.image}
                          alt="Award"
                          className="table-image"
                        />

                      </td>

                      <td>{award.awardedBy}</td>

                      <td>{award.awardedTo}</td>

                      <td>{award.year}</td>

                      <td>

                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(award)}
                        >
                          <FaEdit />
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(award.id)}
                        >
                          <FaTrash />
                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="7"
                      className="empty-data"
                    >
                      No Award Found
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
}

export default AwardList;