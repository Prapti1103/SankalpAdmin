import { useEffect, useState } from "react";
import { Modal, Form, Button, Row, Col, Image } from "react-bootstrap";
import { BsUpload, BsTrash } from "react-icons/bs";
import {
  createService,
  updateService,
} from "../../../../Services/serviceService";
import "./Service.css";

function ServiceForm({
  show,
  handleClose,
  services,
  setServices,
  editData,
}) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {

    if (editData) {

      setFormData({
        title: editData.title || "",
        description: editData.description || "",
        image: editData.image || null,
      });

      setPreview(editData.image || "");

    } else {

      resetForm();

    }

  }, [editData]);

  const resetForm = () => {

    setFormData({
      title: "",
      description: "",
      image: null,
    });

    setPreview("");

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      image: file,
    });

    setPreview(URL.createObjectURL(file));

  };

  const removeImage = () => {

    setFormData({
      ...formData,
      image: null,
    });

    setPreview("");

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);

      if (formData.image) {
        data.append("image", formData.image);
      }

      if (editData) {

        const response = await updateService(editData.id, data);

        setServices((prev) =>
          prev.map((item) =>
            item.id === editData.id ? response.data : item
          )
        );

        alert("Service Updated Successfully");

      } else {

        const response = await createService(data);

        setServices((prev) => [...prev, response.data]);

        alert("Service Added Successfully");

      }

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
      centered
      size="lg"
    >

      <Modal.Header closeButton>

        <Modal.Title>

          {editData ? "Update Service" : "Add Service"}

        </Modal.Title>

      </Modal.Header>

      <Form onSubmit={handleSubmit}>

        <Modal.Body>

          <Row>

            <Col md={4}>

              <Form.Group>

                <Form.Label>

                  Upload Image

                </Form.Label>

                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />

              </Form.Group>

              <div className="image-preview mt-3">

                {preview ? (

                  <>
                    <Image
                      src={preview}
                      fluid
                      rounded
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

                  Title

                </Form.Label>

                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter Service Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />

              </Form.Group>

              <Form.Group>

                <Form.Label>

                  Description

                </Form.Label>

                <Form.Control
                  as="textarea"
                  rows={6}
                  name="description"
                  placeholder="Enter Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
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

            {editData
              ? "Update Service"
              : "Save Service"}

          </Button>

        </Modal.Footer>

      </Form>

    </Modal>

  );

}

export default ServiceForm;