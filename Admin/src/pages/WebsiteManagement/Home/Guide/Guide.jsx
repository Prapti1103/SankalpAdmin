import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Guide.css";

function Guide() {
  const [guideData, setGuideData] = useState({
    image: null,
    title: "",
    link: "",
    description: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGuideData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setGuideData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(guideData);

    alert("Guide Saved Successfully");
  };

  const handleReset = () => {
    setGuideData({
      image: null,
      title: "",
      link: "",
      description: "",
    });

    setPreview(null);
  };

  return (
    <Container fluid className="guide-page">
      <Card className="guide-card shadow">
        <Card.Body>

          <div className="page-title">
            <h2>Sankalp Features</h2>
            <p>Manage Sankalp Features</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Row className="g-4">

              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                  />
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Label>Preview</Form.Label>

                <div className="image-preview">
                  {preview ? (
                    <img src={preview} alt="Preview" />
                  ) : (
                    <span>No Image Selected</span>
                  )}
                </div>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Guide Title"
                    name="title"
                    value={guideData.title}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="https://example.com"
                    name="link"
                    value={guideData.link}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter Description"
                    name="description"
                    value={guideData.description}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

            </Row>

            <div className="guide-btn-group">
              <Button
                variant="outline-secondary"
                type="button"
                onClick={handleReset}
              >
                Reset
              </Button>

              <Button
                variant="primary"
                type="submit"
              >
                Save Features
              </Button>
            </div>

          </Form>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default Guide;