import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";
import "./CentreCoordinator.css";

const CentreCoordinator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { district, taluka, examCentre } = location.state;

  const [coordinators, setCoordinators] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save Coordinator
  const handleSave = () => {
    const { name, mobile, email, password } = formData;

    if (!name || !mobile || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const newCoordinator = {
      id: Date.now(),
      ...formData,
      districtId: district.id,
      talukaId: taluka.id,
      examCentreId: examCentre.id,
    };

    setCoordinators((prev) => [...prev, newCoordinator]);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      password: "",
    });

    setShowModal(false);
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Delete this Coordinator?")) {
      setCoordinators((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  const handleSubmit = async () => {
  const payload = {
    district,
    taluka,
    examCentre,
    coordinators,
  };

  console.log(payload);

  alert("Data Submitted Successfully");

  navigate("/district");
};

  return (
    <div className="coordinator-page">

      {/* Heading */}

      <h4>
  {district.districtName} &gt; {taluka.talukaName} &gt; {examCentre.examCentreName}
</h4>

      {/* Toolbar */}

      <div className="coordinator-toolbar">

        <Button
          className="create-btn"
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="me-2" />
          Add Coordinator
        </Button>

      </div>

      {/* Card */}

      <Card className="coordinator-card">

        <Card.Header className="coordinator-header text-light">
          Coordinator List
        </Card.Header>

        <Card.Body>

          <div className="coordinator-table">

            <table className="coordinator-table-ui">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Name</th>

                  <th>Mobile</th>

                  <th>Email</th>

                  <th>Password</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {coordinators.length > 0 ? (

                  coordinators.map((item, index) => (

                    <tr key={item.id}>

                      <td>{index + 1}</td>

                      <td>{item.name}</td>

                      <td>{item.mobile}</td>

                      <td>{item.email}</td>

                      <td>{item.password}</td>

                      <td>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(item.id)
                          }
                        >
                          <FaTrash />
                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="6"
                      className="empty-data"
                    >
                      No Coordinator Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </Card.Body>

      </Card>

      <div className="submit-section">
  <Button
    className="submit-btn"
    onClick={handleSubmit}
    disabled={coordinators.length === 0}
  >
    Submit
  </Button>
</div>

      {/* Modal */}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >

        <Modal.Header closeButton>

          <Modal.Title>
            Add Coordinator
          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <Form.Group className="mb-3">

            <Form.Label>Name</Form.Label>

            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Mobile</Form.Label>

            <Form.Control
              type="text"
              name="mobile"
              placeholder="Enter Mobile"
              value={formData.mobile}
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Group>

            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
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

export default CentreCoordinator;