import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";
import "./Taluka.css";

const Taluka = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { district } = location.state;

  const [talukas, setTalukas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [talukaName, setTalukaName] = useState("");

  // Save Taluka
  const handleSave = () => {
    if (!talukaName.trim()) {
      alert("Please Enter Taluka Name");
      return;
    }

    const newTaluka = {
      id: Date.now(),
      talukaName,
      districtId: district?.id,
    };

    setTalukas((prev) => [...prev, newTaluka]);

    setTalukaName("");
    setShowModal(false);
  };

  // Delete Taluka
  const handleDelete = (id) => {
    if (window.confirm("Delete this taluka?")) {
      setTalukas((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Open Exam Centre
  const handleExamCentre = (taluka) => {
    navigate(
      `/district/${district.id}/taluka/${taluka.id}/exam-centre`,
      {
        state: {
          district,
          taluka,
        },
      }
    );
  };

  return (
    <div className="taluka-page">

      <div className="page-title">
        <h4>District : {district?.districtName}</h4>
      </div>

      <div className="taluka-toolbar">

        <Button
          className="create-btn"
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="me-2" />
          Add Taluka
        </Button>

      </div>

      <Card className="taluka-card">

        <Card.Header className="taluka-header text-light">
          Taluka List
        </Card.Header>

        <Card.Body>

          <div className="taluka-table">

            <table className="taluka-table-ui">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Taluka Name</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {talukas.length > 0 ? (

                  talukas.map((taluka, index) => (

                    <tr key={taluka.id}>

                      <td>{index + 1}</td>

                      <td>{taluka.talukaName}</td>

                      <td>

                        <div className="action-buttons">

                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleDelete(taluka.id)
                            }
                          >
                            <FaTrash />
                          </button>

                          <Button
                            size="sm"
                            className="exam-btn"
                            onClick={() =>
                              handleExamCentre(taluka)
                            }
                          >
                            + Add Exam Centre
                          </Button>

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="3"
                      className="empty-data"
                    >
                      No Taluka Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </Card.Body>

      </Card>

      {/* Modal */}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >

        <Modal.Header closeButton>

          <Modal.Title>
            Add Taluka
          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <Form.Group>

            <Form.Label>
              Taluka Name
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Taluka Name"
              value={talukaName}
              onChange={(e) =>
                setTalukaName(e.target.value)
              }
            />

          </Form.Group>

        </Modal.Body>

        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>

          <Button onClick={handleSave}>
            Save
          </Button>

        </Modal.Footer>

      </Modal>

    </div>
  );
};

export default Taluka;