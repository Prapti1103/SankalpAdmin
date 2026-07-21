import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { BsTrash, BsUpload } from "react-icons/bs";
import {
  createGallery,
  updateGallery,
} from "../../../Services/galleryService";
import "./Gallery.css";

function GalleryForm({
  show,
  handleClose,
  gallery,
  setGallery,
  editData,
}) {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (editData) {
      setFormData({
        title: editData.title,
        link: editData.link,
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
      title: "",
      link: "",
      image: null,
    });

    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("link", formData.link);

      if (formData.image) {
        data.append("image", formData.image);
      }

      if (editData) {
        await updateGallery(editData.id, data);
      } else {
        await createGallery(data);
      }

      alert(
        editData
          ? "Gallery Updated Successfully"
          : "Gallery Saved Successfully"
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
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {editData ? "Update Gallery" : "Add Gallery Image"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>

          <Row>

            <Col md={4}>

              <Form.Group>

                <Form.Label>
                  Gallery Image
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
                  Title
                </Form.Label>

                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Gallery Title"
                  value={formData.title}
                  onChange={handleChange}
                />

              </Form.Group>

              <Form.Group>

                <Form.Label>
                  Link
                </Form.Label>

                <Form.Control
                  type="text"
                  name="link"
                  placeholder="https://example.com"
                  value={formData.link}
                  onChange={handleChange}
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
            {editData ? "Update Gallery" : "Save Gallery"}
          </Button>

        </Modal.Footer>

      </Form>
    </Modal>
  );
}

export default GalleryForm;