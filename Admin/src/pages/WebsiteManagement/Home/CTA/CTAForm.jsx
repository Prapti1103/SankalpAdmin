import { useEffect, useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { createCTA, updateCTA } from "../../../../Services/ctaService";
import "./CTA.css";

function CTAForm({
  show,
  handleClose,
  ctas,
  setCtas,
  editData,
}) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    startDate: "",
    endDate: "",
    registrationFee: "",
    eligibleClasses: "",
    examPattern: "",
  });

  useEffect(() => {

    if (editData) {

      setFormData({
        title: editData.title || "",
        description: editData.description || "",
        link: editData.link || "",
        startDate: editData.startDate || "",
        endDate: editData.endDate || "",
        registrationFee: editData.registrationFee || "",
        eligibleClasses: editData.eligibleClasses || "",
        examPattern: editData.examPattern || "",
      });

    } else {

      resetForm();

    }

  }, [editData]);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      link: "",
      startDate: "",
      endDate: "",
      registrationFee: "",
      eligibleClasses: "",
      examPattern: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (editData) {

        const response = await updateCTA(editData.id, formData);

        setCtas((prev) =>
          prev.map((item) =>
            item.id === editData.id ? response.data : item
          )
        );

        alert("CTA Updated Successfully");

      } else {

        const response = await createCTA(formData);

        setCtas((prev) => [...prev, response.data]);

        alert("CTA Added Successfully");

      }

      resetForm();
      handleClose();

    } catch (error) {

      console.error(error);
      alert("Something went wrong.");

    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">

      <Modal.Header closeButton>
        <Modal.Title>
          {editData ? "Update CTA" : "Add CTA"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>

        <Modal.Body>

          <Row>

            <Col md={6}>

              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter Title"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter Description"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="Enter Link"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Registration Fee</Form.Label>
                <Form.Control
                  type="text"
                  name="registrationFee"
                  value={formData.registrationFee}
                  onChange={handleChange}
                  placeholder="Enter Registration Fee"
                />
              </Form.Group>

            </Col>

            <Col md={6}>

              <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Eligible Classes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="eligibleClasses"
                  value={formData.eligibleClasses}
                  onChange={handleChange}
                  placeholder="Example: Class 5, Class 6, Class 7"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Exam Pattern</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="examPattern"
                  value={formData.examPattern}
                  onChange={handleChange}
                  placeholder="Example: MCQ, Written Exam, Interview"
                />
              </Form.Group>

            </Col>

          </Row>

        </Modal.Body>

        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="save-btn"
          >
            {editData ? "Update CTA" : "Save CTA"}
          </Button>

        </Modal.Footer>

      </Form>

    </Modal>
  );
}

export default CTAForm;