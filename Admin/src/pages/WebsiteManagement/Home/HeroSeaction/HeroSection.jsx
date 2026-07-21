import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./HeroSection.css";

function HeroSection() {
  const [heroData, setHeroData] = useState({
    image: null,
    title: "",
    link: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeroData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setHeroData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(heroData);
  };

  const handleReset = () => {
    setHeroData({
      image: null,
      title: "",
      link: "",
    });

    setPreview(null);
  };

  return (
    <Container fluid className="hero-section-page">
      <Card className="hero-card shadow">
        <Card.Body>

          <div className="page-title">
            <h2>Hero Section</h2>
            <p>Manage Hero Banner</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Row className="g-4">

              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Banner Image</Form.Label>
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
                    placeholder="Enter Title"
                    name="title"
                    value={heroData.title}
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
                    value={heroData.link}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

            </Row>

            <div className="hero-btn-group">
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
                Save Hero
              </Button>
            </div>

          </Form>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default HeroSection;