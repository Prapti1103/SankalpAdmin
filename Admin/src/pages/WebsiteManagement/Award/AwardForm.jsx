import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { BsTrash, BsUpload } from "react-icons/bs";
import {
  createAward,
  updateAward,
} from "../../../Services/awardService";
import "./Award.css";

function AwardForm({ show, handleClose, awards, setAwards, editData, setEditData }) {

  const [formData, setFormData] = useState({
    awardTitle: "",
    description: "",
    awardedBy: "",
    awardedTo: "",
    year: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (editData) {
      setFormData({
        awardTitle: editData.awardTitle,
        description: editData.description,
        awardedBy: editData.awardedBy,
        awardedTo: editData.awardedTo,
        year: editData.year,
        image: editData.image,
      });

      setPreview(editData.image);
    } else {
      resetForm();
    }
  }, [editData]);

  // Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Image Change
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  // Remove Image
  const removeImage = () => {
    setPreview(null);

    setFormData((prev) => ({
      ...prev,
      image: null,
    }));
  };

  // Reset
  const resetForm = () => {
    setFormData({
      awardTitle: "",
      description: "",
      awardedBy: "",
      awardedTo: "",
      year: "",
      image: null,
    });

    setPreview(null);
  };

  // Save
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = new FormData();

      data.append("awardTitle", formData.awardTitle);
      data.append("description", formData.description);
      data.append("awardedBy", formData.awardedBy);
      data.append("awardedTo", formData.awardedTo);
      data.append("year", formData.year);

      if (formData.image) {
        data.append("image", formData.image);
      }

      if (editData) {

        await updateAward(editData.id, data);

      } else {

        await createAward(data);

      }

      alert(editData ? "Award Updated Successfully" : "Award Saved Successfully");

      resetForm();

      handleClose();

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (

    <Modal show={show} onHide={handleClose} size="lg" centered>

      <Modal.Header closeButton>

        <Modal.Title>
          {editData ? "Update Award" : "Add Award"}
        </Modal.Title>

      </Modal.Header>

      <Form onSubmit={handleSubmit}>

        <Modal.Body>

          <Row>

            <Col md={4}>

              <Form.Group>

                <Form.Label>
                  Award Image
                </Form.Label>

                <Form.Control type="file" accept="image/*" onChange={handleImage} />

              </Form.Group>

              <div className="preview-box mt-3">

                {preview ? (

                  <>
                    <img src={preview} alt="Preview" className="preview-image" />

                    <Button variant="danger" size="sm" className="mt-3" onClick={removeImage}>
                      <BsTrash />
                      {" "}Remove
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
                  Award Title
                </Form.Label>

                <Form.Control type="text" name="awardTitle" value={formData.awardTitle} onChange={handleChange} />

              </Form.Group>

              <Form.Group className="mb-3">

                <Form.Label>
                  Description
                </Form.Label>

                <Form.Control as="textarea" rows={4} name="description" value={formData.description} onChange={handleChange} />

              </Form.Group>

              <Form.Group className="mb-3">

                <Form.Label>
                  Awarded By
                </Form.Label>

                <Form.Control type="text" name="awardedBy" value={formData.awardedBy} onChange={handleChange} />

              </Form.Group>

              <Form.Group className="mb-3">

                <Form.Label>
                  Awarded To
                </Form.Label>

                <Form.Control type="text" name="awardedTo" value={formData.awardedTo} onChange={handleChange} />

              </Form.Group>

              <Form.Group>

                <Form.Label>
                  Award Year
                </Form.Label>

                <Form.Control type="number" name="year" value={formData.year} onChange={handleChange} />

              </Form.Group>

            </Col>

          </Row>

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button type="submit" className="save-btn">
            <BsUpload className="me-2" />
            {editData ? "Update Award" : "Save Award"}
          </Button>

        </Modal.Footer>

      </Form>

    </Modal>

  );
}

export default AwardForm;
