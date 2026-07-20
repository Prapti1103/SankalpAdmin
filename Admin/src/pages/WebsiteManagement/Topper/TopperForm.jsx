import { useState, useEffect } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { BsTrash, BsUpload, BsXCircle } from "react-icons/bs";

function TopperForm({ topper, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    studentName: "",
    marks: "",
    className: "",
    rank: "",
    year: "",
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  // Edit Mode
  useEffect(() => {
    if (topper) {
      setFormData({
        studentName: topper.studentName || "",
        marks: topper.marks || "",
        className: topper.className || "",
        rank: topper.rank || "",
        year: topper.year || "",
        photo: topper.photo || null,
      });

      if (topper.photo) {
        if (typeof topper.photo === "string") {
          setPreview(topper.photo);
        } else {
          setPreview(URL.createObjectURL(topper.photo));
        }
      } else {
        setPreview(null);
      }
    }
  }, [topper]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setPreview(null);

    setFormData((prev) => ({
      ...prev,
      photo: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Card className="topper-card shadow">
      <Card.Header className="topper-header">
        {topper ? "Edit Topper" : "Add New Topper"}
      </Card.Header>

      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={4}>
              <Form.Group>
                <Form.Label>Topper Photo</Form.Label>

                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />
              </Form.Group>

              <div className="preview-box mt-3">
                {preview ? (
                  <>
                    <img
                      src={preview}
                      alt="Preview"
                      className="preview-image"
                    />

                    <Button
                      variant="danger"
                      size="sm"
                      className="mt-3"
                      onClick={removeImage}
                    >
                      <BsTrash className="me-2" />
                      Remove
                    </Button>
                  </>
                ) : (
                  <div className="empty-preview">
                    No Image Selected
                  </div>
                )}
              </div>
            </Col>

            <Col lg={8}>
              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>

                <Form.Control
                  type="text"
                  name="studentName"
                  placeholder="Enter Student Name"
                  value={formData.studentName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Total Marks (%)</Form.Label>

                    <Form.Control
                      type="text"
                      name="marks"
                      placeholder="99%"
                      value={formData.marks}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Post / Class</Form.Label>

                    <Form.Control
                      type="text"
                      name="className"
                      placeholder="10TH"
                      value={formData.className}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Rank</Form.Label>

                    <Form.Control
                      type="number"
                      name="rank"
                      placeholder="1"
                      value={formData.rank}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>

                    <Form.Control
                      type="number"
                      name="year"
                      placeholder="2026"
                      value={formData.year}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex gap-2">
                <Button type="submit" className="save-btn">
                  <BsUpload className="me-2" />
                  {topper ? "Update Topper" : "Save Topper"}
                </Button>

                <Button variant="secondary" onClick={onCancel}>
                  <BsXCircle className="me-2" />
                  Cancel
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TopperForm;