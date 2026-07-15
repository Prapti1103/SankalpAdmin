
import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./AboutSeaction.css";

function AboutSection() {
  const initialState = {
    aboutTitle: "",
    smallHeading: "",
    mainHeading: "",
    description: "",
    buttonText: "",
    status: "Active",
    image: null,
  };

  const [aboutData, setAboutData] = useState(initialState);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAboutData((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleReset = () => {
    setAboutData(initialState);
    setPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("aboutTitle", aboutData.aboutTitle);
    formData.append("smallHeading", aboutData.smallHeading);
    formData.append("mainHeading", aboutData.mainHeading);
    formData.append("description", aboutData.description);
    formData.append("buttonText", aboutData.buttonText);
    formData.append("status", aboutData.status);

    if (aboutData.image) {
      formData.append("image", aboutData.image);
    }

    console.log("Ready to send:", Object.fromEntries(formData.entries()));
    alert("Backend connect hone ke baad API call yaha hogi.");
  };

  return (
    <Container fluid className="about-page">
      <Card className="about-card shadow-sm">
        <Card.Body>
          <div className="page-title">
            <h2>About Section</h2>
            <p>Manage About Section Content</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Row className="g-4">
              <Col md={6}>
                <Form.Label>About Title</Form.Label>
                <Form.Control name="aboutTitle" value={aboutData.aboutTitle} onChange={handleChange}/>
              </Col>

              <Col md={6}>
                <Form.Label>Small Heading</Form.Label>
                <Form.Control name="smallHeading" value={aboutData.smallHeading} onChange={handleChange}/>
              </Col>

              <Col xs={12}>
                <Form.Label>Main Heading</Form.Label>
                <Form.Control name="mainHeading" value={aboutData.mainHeading} onChange={handleChange}/>
              </Col>

              <Col xs={12}>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={5} name="description" value={aboutData.description} onChange={handleChange}/>
              </Col>

              <Col md={6}>
                <Form.Label>Upload About Image</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleImage}/>
              </Col>

              <Col md={6}>
                <Form.Label>Image Preview</Form.Label>
                <div className="image-preview">
                  {preview ? <img src={preview} alt="Preview"/> : <span>No Image Selected</span>}
                </div>
              </Col>

              <Col md={6}>
                <Form.Label>Button Text</Form.Label>
                <Form.Control name="buttonText" value={aboutData.buttonText} onChange={handleChange}/>
              </Col>

              <Col md={6}>
                <Form.Label>Status</Form.Label>
                <Form.Select name="status" value={aboutData.status} onChange={handleChange}>
                  <option>Active</option>
                  <option>Inactive</option>
                </Form.Select>
              </Col>
            </Row>

            <div className="about-btn-group">
              <Button variant="secondary" type="button" onClick={handleReset}>Reset</Button>
              <Button variant="primary" type="submit">Save About</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AboutSection;
