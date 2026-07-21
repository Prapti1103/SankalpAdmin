import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { BsTrash, BsUpload } from "react-icons/bs";
import {
  createCourse,
  updateCourse,
} from "../../../Services/courseService";
import "./Course.css";

function CourseForm({
  show,
  handleClose,
  courses,
  setCourses,
  editData,
}) {

  const [formData, setFormData] = useState({
    courseName: "",
    description: "",
    duration: "",
    price: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (editData) {
      setFormData({
        courseName: editData.courseName,
        description: editData.description,
        duration: editData.duration,
        price: editData.price,
        image: editData.image,
      });

      setPreview(editData.image);
    } else {
      resetForm();
    }
  }, [editData]);

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
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setPreview(null);

    setFormData((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const resetForm = () => {
    setFormData({
      courseName: "",
      description: "",
      duration: "",
      price: "",
      image: null,
    });

    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = new FormData();

      data.append("courseName", formData.courseName);
      data.append("description", formData.description);
      data.append("duration", formData.duration);
      data.append("price", formData.price);

      if (formData.image) {
        data.append("image", formData.image);
      }

      if (editData) {

        await updateCourse(editData.id, data);

      } else {

        await createCourse(data);

      }

      alert(
        editData
          ? "Course Updated Successfully"
          : "Course Saved Successfully"
      );

      resetForm();

      handleClose();

    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
    >

      <Modal.Header closeButton>
        <Modal.Title>
          {editData ? "Update Course" : "Add Course"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>

        <Modal.Body>

          <Row>

            <Col md={4}>

              <Form.Group>

                <Form.Label>
                  Course Image
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

            <Col md={8}>

              <Form.Group className="mb-3">

                <Form.Label>
                  Course Name
                </Form.Label>

                <Form.Control
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  placeholder="Course Name"
                />

              </Form.Group>

              <Form.Group className="mb-3">

                <Form.Label>
                  Description
                </Form.Label>

                <Form.Control
                  as="textarea"
                  rows={4}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                />

              </Form.Group>

              <Form.Group className="mb-3">

                <Form.Label>
                  Duration
                </Form.Label>

                <Form.Control
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="10 Months"
                />

              </Form.Group>

              <Form.Group>

                <Form.Label>
                  Price
                </Form.Label>

                <Form.Control
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="₹4,500 / year"
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
            <BsUpload className="me-2" />
            {editData ? "Update Course" : "Save Course"}
          </Button>

        </Modal.Footer>

      </Form>

    </Modal>
  );
}

export default CourseForm;