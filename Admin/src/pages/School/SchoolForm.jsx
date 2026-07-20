import { useState, useEffect } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const SchoolForm = ({ school, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    schoolName: "",
    village: "",
    address: "",
  });

  // Edit Mode
  useEffect(() => {
    if (school) {
      setFormData(school);
    }
  }, [school]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.schoolName.trim() ||
      !formData.village.trim() ||
      !formData.address.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    onSave(formData);

    // Reset Form
    setFormData({
      schoolName: "",
      village: "",
      address: "",
    });
  };

  return (
    <div className="school-page">
      <Card className="school-card">

        <Card.Header className="school-header">
          {school ? "Update School" : "Add School"}
        </Card.Header>

        <Card.Body>

          <Form onSubmit={handleSubmit}>

            <Row>

              <Col md={6} className="mb-3">
                <Form.Label>School Name</Form.Label>

                <Form.Control
                  type="text"
                  name="schoolName"
                  placeholder="Enter School Name"
                  value={formData.schoolName}
                  onChange={handleChange}
                />
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label>Village</Form.Label>

                <Form.Control
                  type="text"
                  name="village"
                  placeholder="Enter Village"
                  value={formData.village}
                  onChange={handleChange}
                />
              </Col>

            </Row>

            <Row>

              <Col md={12} className="mb-3">
                <Form.Label>Address</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Col>

            </Row>

            <div className="d-flex gap-2 mt-3">

              <Button
                type="submit"
                className="save-btn"
              >
                {school ? "Update School" : "Save School"}
              </Button>

              <Button
                variant="secondary"
                onClick={onCancel}
              >
                Cancel
              </Button>

            </div>

          </Form>

        </Card.Body>

      </Card>
    </div>
  );
};

export default SchoolForm;