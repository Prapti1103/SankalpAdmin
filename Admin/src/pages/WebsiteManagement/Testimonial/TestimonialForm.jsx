import { useState, useEffect } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { BsTrash, BsUpload, BsXCircle } from "react-icons/bs";

function TestimonialForm({ testimonial, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    exam: "",
    post: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  /* ================= Edit Mode ================= */

  useEffect(() => {
    if (testimonial) {
      setFormData({
        name: testimonial.name || "",
        exam: testimonial.exam || "",
        post: testimonial.post || "",
        description: testimonial.description || "",
        image: testimonial.image || null,
      });

      if (testimonial.image) {
        if (typeof testimonial.image === "string") {
          setPreview(testimonial.image);
        } else {
          setPreview(URL.createObjectURL(testimonial.image));
        }
      } else {
        setPreview(null);
      }
    }
  }, [testimonial]);

  /* ================= Handle Input ================= */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= Handle Image ================= */

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      image: file,
    });

    setPreview(URL.createObjectURL(file));
  };

  /* ================= Remove Image ================= */

  const removeImage = () => {
    setPreview(null);

    setFormData({
      ...formData,
      image: null,
    });
  };

  /* ================= Submit ================= */

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Card className="testimonial-card shadow">
      <Card.Header className="testimonial-header">
        {testimonial ? "Edit Testimonial" : "Add New Testimonial"}
      </Card.Header>

      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>

            {/* Image */}

            <Col lg={4}>
              <Form.Group>
                <Form.Label>
                  Testimonial Image
                  <small className="text-muted d-block">
                    Upload testimonial image
                  </small>
                </Form.Label>

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

            {/* Details */}

            <Col lg={8}>

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
                <Form.Label>Exam</Form.Label>

                <Form.Control
                  type="text"
                  name="exam"
                  placeholder="Enter Exam"
                  value={formData.exam}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Post</Form.Label>

                <Form.Control
                  type="text"
                  name="post"
                  placeholder="Enter Post"
                  value={formData.post}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={4}
                  name="description"
                  placeholder="Enter Description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-flex gap-2 mt-4">
                <Button type="submit" className="save-btn">
                  <BsUpload className="me-2" />
                  {testimonial ? "Update Testimonial" : "Save Testimonial"}
                </Button>

                <Button
                  variant="secondary"
                  onClick={onCancel}
                >
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

export default TestimonialForm;