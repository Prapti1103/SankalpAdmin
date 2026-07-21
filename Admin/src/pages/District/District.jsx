import { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./District.css";

const District = () => {
  const navigate = useNavigate();

  const [districts, setDistricts] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [districtName, setDistrictName] = useState("");

  // Add District
  const handleSave = () => {
    if (!districtName.trim()) {
      alert("Please Enter District Name");
      return;
    }

    const newDistrict = {
      id: Date.now(),
      districtName,
    };

    setDistricts((prev) => [...prev, newDistrict]);

    setDistrictName("");

    setShowModal(false);
  };

  // Delete District
  const handleDelete = (id) => {
    if (window.confirm("Delete this district?")) {
      setDistricts((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Open Taluka Page
  const handleAddTaluka = (district) => {
   navigate(`/district/${district.id}/taluka`, {
    state: {
        district,
    },
});
  };

  return (
    <div className="district-page">

      {/* Top Button */}

      <div className="district-toolbar">

        <Button className="create-btn" onClick={() => setShowModal(true)}>
          <FaPlus className="me-2" />
          Add District
        </Button>

      </div>

      {/* Table */}

      <Card className="district-card">

        <Card.Header className="district-header text-light">
          District List
        </Card.Header>

        <Card.Body>

          <div className="district-table">

            <table className="district-table-ui">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>District Name</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {districts.length > 0 ? (

                  districts.map((district, index) => (

                    <tr key={district.id}>

                      <td>{index + 1}</td>

                      <td>{district.districtName}</td>

                      <td>

                        <div className="action-buttons">

                          <button className="delete-btn" onClick={() => handleDelete(district.id)}>
                            <FaTrash />
                          </button>

                          <Button size="sm" className="taluka-btn" onClick={() => handleAddTaluka(district)}>
                            + Add Taluka
                          </Button>

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td colSpan="3" className="empty-data">
                      No District Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </Card.Body>

      </Card>

      {/* Add District Modal */}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>

        <Modal.Header closeButton>

          <Modal.Title>
            Add District
          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <Form.Group>

            <Form.Label>
              District Name
            </Form.Label>

            <Form.Control type="text" placeholder="Enter District Name" value={districtName} onChange={(e) => setDistrictName(e.target.value)} />

          </Form.Group>

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={() => setShowModal(false)}>
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

export default District;