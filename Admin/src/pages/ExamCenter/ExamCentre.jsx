import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";
import "./ExamCentre.css";

const ExamCentre = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { district, taluka } = location.state;

  const [examCentres, setExamCentres] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [examCentreName, setExamCentreName] = useState("");

  // Save Exam Centre
  const handleSave = () => {
    if (!examCentreName.trim()) {
      alert("Please Enter Exam Centre Name");
      return;
    }

    const newExamCentre = {
      id: Date.now(),
      examCentreName,
      districtId: district.id,
      talukaId: taluka.id,
    };

    setExamCentres((prev) => [...prev, newExamCentre]);

    setExamCentreName("");
    setShowModal(false);
  };

  // Delete Exam Centre
  const handleDelete = (id) => {
    if (window.confirm("Delete this Exam Centre?")) {
      setExamCentres((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  // Open Coordinator Page
  const handleCoordinator = (examCentre) => {
    navigate(
      `/district/${district.id}/taluka/${taluka.id}/exam-centre/${examCentre.id}/coordinator`,
      {
        state: {
          district,
          taluka,
          examCentre,
        },
      }
    );
  };

  return (
    <div className="exam-page">

      {/* Header */}

      <div className="page-title">
  <h4>
    {district.districtName} &gt; {taluka.talukaName} &gt; Exam Centre
  </h4>
</div>

      {/* Toolbar */}

      <div className="exam-toolbar">
        <Button
          className="create-btn"
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="me-2" />
          Add Exam Centre
        </Button>
      </div>

      {/* Card */}

      <Card className="exam-card">

        <Card.Header className="exam-header text-light">
          Exam Centre List
        </Card.Header>

        <Card.Body>

          <div className="exam-table">

            <table className="exam-table-ui">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Exam Centre Name</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {examCentres.length > 0 ? (

                  examCentres.map((centre, index) => (

                    <tr key={centre.id}>

                      <td>{index + 1}</td>

                      <td>{centre.examCentreName}</td>

                      <td>

                        <div className="action-buttons">

                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleDelete(centre.id)
                            }
                          >
                            <FaTrash />
                          </button>

                          <Button
                            size="sm"
                            className="coordinator-btn"
                            onClick={() =>
                              handleCoordinator(centre)
                            }
                          >
                            + Add Coordinator
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
                      No Exam Centre Found
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
            Add Exam Centre
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form.Group>

            <Form.Label>
              Exam Centre Name
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Exam Centre Name"
              value={examCentreName}
              onChange={(e) =>
                setExamCentreName(e.target.value)
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

export default ExamCentre;