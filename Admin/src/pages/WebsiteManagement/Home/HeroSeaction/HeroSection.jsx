import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./HeroSection.css";

function HeroSection() {
  const [heroData, setHeroData] = useState({
    banner: null,
    topBadge: "",
    mainHeading: "",
    subHeading: "",
    languageText: "",
    language: "English",
    displayOrder: 1,
    status: "Active",
    socialLinks: { linkedin: "", instagram: "", whatsapp: "", facebook: "" },
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeroData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setHeroData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [name]: value },
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setHeroData((prev) => ({ ...prev, banner: file }));
    setPreview(URL.createObjectURL(file));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Submit button clicked");

  // baki code...
};

  const handleReset = () => {
    setHeroData({
      banner: null,
      topBadge: "",
      mainHeading: "",
      subHeading: "",
      languageText: "",
      language: "English",
      displayOrder: 1,
      status: "Active",
      socialLinks: { linkedin: "", instagram: "", whatsapp: "", facebook: "" },
    });
    setPreview(null);
  };

  return (
    <Container fluid className="hero-section-page">
      <Card className="hero-card shadow-sm">
        <Card.Body>
          <div className="page-title">
            <h2>Hero Section</h2>
            <p>Manage Hero Banner Content</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Row className="g-4">
              {/* Upload & Preview */}
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Banner Image</Form.Label>
                  <Form.Control type="file" accept="image/*" onChange={handleImage} />
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Label>Preview</Form.Label>
                <div className="image-preview">
                  {preview ? <img src={preview} alt="Preview" /> : <span>No Image Selected</span>}
                </div>
              </Col>

              {/* Form Fields */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Top Badge</Form.Label>
                  <Form.Control type="text" placeholder="Govt. Authorised" name="topBadge" value={heroData.topBadge} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Language</Form.Label>
                  <Form.Select name="language" value={heroData.language} onChange={handleChange}>
                    <option>English</option>
                    <option>Marathi</option>
                    <option>Hindi</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Main Heading</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter Main Heading" name="mainHeading" value={heroData.mainHeading} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Sub Heading</Form.Label>
                  <Form.Control type="text" placeholder="Std 1st to Std 8th" name="subHeading" value={heroData.subHeading} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Language Text</Form.Label>
                  <Form.Control type="text" placeholder="(Marathi, English, Semi-English)" name="languageText" value={heroData.languageText} onChange={handleChange} />
                </Form.Group>
              </Col>

              {/* Social Media Links */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>LinkedIn URL</Form.Label>
                  <Form.Control type="url" placeholder="https://linkedin.com/..." name="linkedin" value={heroData.socialLinks.linkedin} onChange={handleSocialChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Instagram URL</Form.Label>
                  <Form.Control type="url" placeholder="https://instagram.com/..." name="instagram" value={heroData.socialLinks.instagram} onChange={handleSocialChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>WhatsApp URL</Form.Label>
                  <Form.Control type="url" placeholder="https://wa.me/91xxxxxxxxxx" name="whatsapp" value={heroData.socialLinks.whatsapp} onChange={handleSocialChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Facebook URL</Form.Label>
                  <Form.Control type="url" placeholder="https://facebook.com/..." name="facebook" value={heroData.socialLinks.facebook} onChange={handleSocialChange} />
                </Form.Group>
              </Col>

              {/* Settings */}
              {/* <Col md={6}>
                <Form.Group>
                  <Form.Label>Display Order</Form.Label>
                  <Form.Control type="number" min="1" name="displayOrder" value={heroData.displayOrder} onChange={handleChange} />
                </Form.Group>
              </Col> */}

             
            </Row>

            <div className="hero-btn-group">
              <Button variant="secondary" type="button" onClick={handleReset}>Reset</Button>
              <Button variant="primary" type="submit">Save Hero</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HeroSection;