import { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { BsTrash, BsUpload } from "react-icons/bs";
import "./Award.css";
import { createAward } from "../../../Services/awardService";

function Award() {
  const [formData, setFormData] = useState({
    awardTitle: "",
    description: "",
    awardedBy: "",
    awardedTo: "",
    year: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Image Upload
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

  // Reset Form
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

  // Save Award
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
      await createAward(data);
      alert("Award Saved Successfully");
      resetForm();
    } catch (error) {
      console.error(error);
      alert("Failed to save award.");
    }
  };

  return (
    <div className="award-page">
      <Card className="award-card shadow">

        <Card.Header className="award-header">
          Award Management
        </Card.Header>

        <Card.Body>

          <Form onSubmit={handleSubmit}>

            <Row>

              {/* Award Image */}

              <Col lg={4} md={12} className="mb-4">

                <Form.Group>

                  <Form.Label className="fw-bold">
                    Award Image
                  </Form.Label>

                  

                  <Form.Control type="file" accept="image/*" onChange={handleImage} />

                </Form.Group>

                <div className="preview-box mt-3">

                  {preview ? (
                    <>
                      <img src={preview} alt="Preview" className="preview-image" />

                      <Button variant="danger" size="sm" className="mt-3" onClick={removeImage}>
                        <BsTrash /> Remove
                      </Button>
                    </>
                  ) : (
                    <div className="empty-preview">
                      No Image Selected
                    </div>
                  )}

                </div>

              </Col>

              {/* Form */}

              <Col lg={8} md={12}>

                <Form.Group className="mb-3">

                  <Form.Label>Award Title</Form.Label>

                  

                  <Form.Control type="text" name="awardTitle" placeholder="Enter Award Title" value={formData.awardTitle} onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3">

                  <Form.Label>Description</Form.Label>

                  

                  <Form.Control as="textarea" rows={4} name="description" placeholder="Enter Description" value={formData.description} onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3">

                  <Form.Label>Awarded By</Form.Label>

                

                  <Form.Control type="text" name="awardedBy" placeholder="Enter Awarded By" value={formData.awardedBy} onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3">

                  <Form.Label>Awarded To</Form.Label>

                  

                  <Form.Control type="text" name="awardedTo" placeholder="Enter Awarded To" value={formData.awardedTo} onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-4">

                  <Form.Label>Award Year</Form.Label>

                  

                  <Form.Control type="number" name="year" placeholder="Enter Year" value={formData.year} onChange={handleChange} />

                </Form.Group>

                <Button type="submit" className="save-btn">
                  <BsUpload className="me-2" />
                  Save Award
                </Button>

              </Col>

            </Row>

          </Form>

        </Card.Body>

      </Card>
    </div>
  );
}

export default Award;