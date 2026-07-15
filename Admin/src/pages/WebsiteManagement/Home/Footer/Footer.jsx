import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  const initialState = {
    /* ================= Footer ================= */
    foundationName: "",
    foundationDescription: "",
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    quickHome: "",
    quickAbout: "",
    quickEvents: "",
    quickGallery: "",
    quickContact: "",
    program1: "",
    program2: "",
    program3: "",
    program4: "",
    program5: "",
    address: "",
    phone: "",
    email: "",
    copyright: "",
    status: "Active",

    /* ================= Get In Touch ================= */
    sectionTitle: "Get In Touch",
    formTitle: "Leave us a message",
    namePlaceholder: "Enter Name",
    emailPlaceholder: "Enter Email",
    messagePlaceholder: "Write your message",
    buttonText: "Send Message",
    mapUrl: "",
    contactAddress: "",
    phoneNumber1: "",
    phoneNumber2: "",
    facebookUrl: "",
    contactStatus: "Active",
  };

  const [footerData, setFooterData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFooterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFooterData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(footerData).forEach((key) => {
      formData.append(key, footerData[key]);
    });
    console.log("Footer Data");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    alert("Backend connect hone ke baad API call hogi.");
  };

  return (
    <Container fluid className="footer-page">
      <Card className="footer-card shadow-sm">
        <Card.Body>
          <div className="page-title">
            <h2>Footer Section</h2>
            <p>Manage Footer & Get In Touch Section</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Row className="g-4">
              {/* ================= Footer Details ================= */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Foundation Name</Form.Label>
                  <Form.Control type="text" name="foundationName" placeholder="Enter Foundation Name" value={footerData.foundationName} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Foundation Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="foundationDescription" placeholder="Enter Description" value={footerData.foundationDescription} onChange={handleChange} />
                </Form.Group>
              </Col>

              {/* ================= Social Links ================= */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Facebook URL</Form.Label>
                  <Form.Control type="url" name="facebook" placeholder="https://facebook.com/..." value={footerData.facebook} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Instagram URL</Form.Label>
                  <Form.Control type="url" name="instagram" placeholder="https://instagram.com/..." value={footerData.instagram} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>YouTube URL</Form.Label>
                  <Form.Control type="url" name="youtube" placeholder="https://youtube.com/..." value={footerData.youtube} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>LinkedIn URL</Form.Label>
                  <Form.Control type="url" name="linkedin" placeholder="https://linkedin.com/company/..." value={footerData.linkedin} onChange={handleChange} />
                </Form.Group>
              </Col>

              {/* ================= Quick Links ================= */}
              <Col xs={12}>
                <h5 className="mt-3">Quick Links</h5>
              </Col>

              <Col md={4}>
                <Form.Control name="quickHome" placeholder="Home" value={footerData.quickHome} onChange={handleChange} />
              </Col>

              <Col md={4}>
                <Form.Control name="quickAbout" placeholder="About Us" value={footerData.quickAbout} onChange={handleChange} />
              </Col>

              <Col md={4}>
                <Form.Control name="quickEvents" placeholder="Events" value={footerData.quickEvents} onChange={handleChange} />
              </Col>

              <Col md={6}>
                <Form.Control name="quickGallery" placeholder="Gallery" value={footerData.quickGallery} onChange={handleChange} />
              </Col>

              <Col md={6}>
                <Form.Control name="quickContact" placeholder="Contact" value={footerData.quickContact} onChange={handleChange} />
              </Col>

              {/* ================= Programs ================= */}
              <Col xs={12}>
                <h5 className="mt-4">Programs</h5>
              </Col>

              <Col md={6}>
                <Form.Control name="program1" placeholder="Program 1" value={footerData.program1} onChange={handleChange} />
              </Col>

              <Col md={6}>
                <Form.Control name="program2" placeholder="Program 2" value={footerData.program2} onChange={handleChange} />
              </Col>

              <Col md={6}>
                <Form.Control name="program3" placeholder="Program 3" value={footerData.program3} onChange={handleChange} />
              </Col>

              <Col md={6}>
                <Form.Control name="program4" placeholder="Program 4" value={footerData.program4} onChange={handleChange} />
              </Col>

              <Col xs={12}>
                <Form.Control name="program5" placeholder="Program 5" value={footerData.program5} onChange={handleChange} />
              </Col>

              {/* ================= Contact Details ================= */}
              <Col xs={12}>
                <h5 className="mt-4">Contact Details</h5>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows={3} name="address" placeholder="Enter Address" value={footerData.address} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" name="phone" placeholder="+91 9876543210" value={footerData.phone} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="info@example.com" value={footerData.email} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Copyright Text</Form.Label>
                  <Form.Control type="text" name="copyright" placeholder="© 2026 Sankalpa Welfare Foundation. All Rights Reserved." value={footerData.copyright} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Select name="status" value={footerData.status} onChange={handleChange}>
                    <option>Active</option>
                    <option>Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {/* ================= Get In Touch ================= */}
              <Col xs={12}>
                <hr />
                <h3 className="mt-4 mb-3">Get In Touch Section</h3>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Section Title</Form.Label>
                  <Form.Control type="text" name="sectionTitle" placeholder="Get In Touch" value={footerData.sectionTitle} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Form Title</Form.Label>
                  <Form.Control type="text" name="formTitle" placeholder="Leave us a message" value={footerData.formTitle} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Name Placeholder</Form.Label>
                  <Form.Control type="text" name="namePlaceholder" placeholder="Enter Name" value={footerData.namePlaceholder} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Email Placeholder</Form.Label>
                  <Form.Control type="text" name="emailPlaceholder" placeholder="Enter Email" value={footerData.emailPlaceholder} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Message Placeholder</Form.Label>
                  <Form.Control type="text" name="messagePlaceholder" placeholder="Write your message" value={footerData.messagePlaceholder} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Button Text</Form.Label>
                  <Form.Control type="text" name="buttonText" placeholder="Send Message" value={footerData.buttonText} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Google Map Embed URL</Form.Label>
                  <Form.Control type="text" name="mapUrl" placeholder="https://www.google.com/maps/embed?..." value={footerData.mapUrl} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows={3} name="contactAddress" placeholder="Enter Contact Address" value={footerData.contactAddress} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Phone Number 1</Form.Label>
                  <Form.Control type="text" name="phoneNumber1" placeholder="+91 9876543210" value={footerData.phoneNumber1} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Phone Number 2</Form.Label>
                  <Form.Control type="text" name="phoneNumber2" placeholder="+91 9876543211" value={footerData.phoneNumber2} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Facebook URL</Form.Label>
                  <Form.Control type="url" name="facebookUrl" placeholder="https://facebook.com/..." value={footerData.facebookUrl} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Select name="contactStatus" value={footerData.contactStatus} onChange={handleChange}>
                    <option>Active</option>
                    <option>Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <div className="footer-btn-group">
              <Button variant="secondary" type="button" onClick={handleReset}>Reset</Button>
              <Button variant="primary" type="submit">Save Footer</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Footer;