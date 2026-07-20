import { useState } from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import "./Features.css";

function Features() {
  const [featureData, setFeatureData] = useState({

    // ================= Header =================

    sectionTitle: "Features",
    sectionSubtitle: "Main Features of the Exam",

    // ================= Main Features =================

    feature1Title: "",
    feature1Description: "",

    feature2Title: "",
    feature2Description: "",

    feature3Title: "",
    feature3Description: "",

    // ================= Discover More =================

    discoverTitle: "Discover More",

    // Psychology

    psychologyMenu: "",
    psychologyPageTitle: "",

    psychologyHeading1: "",
    psychologyDescription1: "",

    psychologyHeading2: "",
    psychologyDescription2: "",

    psychologyHeading3: "",
    psychologyDescription3: "",

    psychologyHeading4: "",
    psychologyDescription4: "",

    // Corporate Training

    corporateMenu: "",
    corporatePageTitle: "",

    corporateHeading1: "",
    corporateDescription1: "",

    corporateHeading2: "",
    corporateDescription2: "",

    corporateHeading3: "",
    corporateDescription3: "",

    // Exam Result Checking

    examMenu: "",
    examPageTitle: "",

    examHeading1: "",
    examDescription1: "",

    examHeading2: "",
    examDescription2: "",

    examHeading3: "",
    examDescription3: "",

    examHeading4: "",
    examDescription4: "",

    status: "Active",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFeatureData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(featureData);
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <Container fluid className="features-page">

      <Card className="features-card shadow-sm">

        <Card.Body>

          <div className="page-title">
            <h2>Features Management</h2>
            <p>Manage Features & Discover More Section</p>
          </div>

          <Form onSubmit={handleSubmit}>

            {/* ================= Header ================= */}

            <h4 className="section-heading">
              Feature Header
            </h4>

            <Row className="g-4">

              <Col md={6}>
                <Form.Group>

                  <Form.Label>
                    Section Title
                  </Form.Label>

                  <Form.Control type="text" name="sectionTitle" value={featureData.sectionTitle} onChange={handleChange} />

                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>

                  <Form.Label>
                    Section Subtitle
                  </Form.Label>

                  <Form.Control type="text" name="sectionSubtitle" value={featureData.sectionSubtitle} onChange={handleChange} />

                </Form.Group>
              </Col>

            </Row>

            <hr />

            {/* ================= Main Feature 1 ================= */}

            <h4 className="section-heading">
              Main Feature 1
            </h4>

            <Row className="g-4">

              <Col md={12}>
                <Form.Group>

                  <Form.Label>
                    Feature Title
                  </Form.Label>

                  <Form.Control type="text" name="feature1Title" placeholder="Develop Critical Thinking Skills" value={featureData.feature1Title} onChange={handleChange} />

                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>

                  <Form.Label>
                    Feature Description
                  </Form.Label>

                  <Form.Control as="textarea" rows={5} name="feature1Description" value={featureData.feature1Description} onChange={handleChange} />

                </Form.Group>
              </Col>

            </Row>

            <hr />

            {/* ================= Main Feature 2 ================= */}

            <h4 className="section-heading">
              Main Feature 2
            </h4>

            <Row className="g-4">

              <Col md={12}>
                <Form.Group>

                  <Form.Label>
                    Feature Title
                  </Form.Label>

                  <Form.Control type="text" name="feature2Title" placeholder="Broaden Knowledge Horizons" value={featureData.feature2Title} onChange={handleChange} />

                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>

                  <Form.Label>
                    Feature Description
                  </Form.Label>

                  <Form.Control as="textarea" rows={5} name="feature2Description" value={featureData.feature2Description} onChange={handleChange} />

                </Form.Group>
              </Col>

            </Row>

            <hr />

            {/* ================= Main Feature 3 ================= */}

            <h4 className="section-heading">
              Main Feature 3
            </h4>

            <Row className="g-4">

              <Col md={12}>
                <Form.Group>

                  <Form.Label>
                    Feature Title
                  </Form.Label>

                  <Form.Control type="text" name="feature3Title" placeholder="Exam Recognition & Rewards" value={featureData.feature3Title} onChange={handleChange} />

                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>

                  <Form.Label>
                    Feature Description
                  </Form.Label>

                  <Form.Control as="textarea" rows={5} name="feature3Description" value={featureData.feature3Description} onChange={handleChange} />

                </Form.Group>
              </Col>

            </Row>

            <hr />

            {/* ================= Discover More ================= */}

            <h4 className="section-heading">
              Discover More
            </h4>

            <Row className="g-4">

              <Col md={12}>
                <Form.Group>

                  <Form.Label>
                    Discover Section Title
                  </Form.Label>

                  <Form.Control type="text" name="discoverTitle" value={featureData.discoverTitle} onChange={handleChange} />

                </Form.Group>
              </Col>

            </Row>

            <hr />

            {/* Psychology starts in Part 2 */}


            {/* ================= Psychology ================= */}

            <h4 className="section-heading">
              Psychology
            </h4>

            <Row className="g-4">

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Menu Name</Form.Label>
                  <Form.Control type="text" name="psychologyMenu" placeholder="Psychology" value={featureData.psychologyMenu} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Page Title</Form.Label>
                  <Form.Control type="text" name="psychologyPageTitle" placeholder="Understanding the Scope of Psychology" value={featureData.psychologyPageTitle} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 1 Heading</Form.Label>
                  <Form.Control type="text" name="psychologyHeading1" value={featureData.psychologyHeading1} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 1 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="psychologyDescription1" value={featureData.psychologyDescription1} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 2 Heading</Form.Label>
                  <Form.Control type="text" name="psychologyHeading2" value={featureData.psychologyHeading2} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 2 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="psychologyDescription2" value={featureData.psychologyDescription2} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 3 Heading</Form.Label>
                  <Form.Control type="text" name="psychologyHeading3" value={featureData.psychologyHeading3} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 3 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="psychologyDescription3" value={featureData.psychologyDescription3} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 4 Heading</Form.Label>
                  <Form.Control type="text" name="psychologyHeading4" value={featureData.psychologyHeading4} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 4 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="psychologyDescription4" value={featureData.psychologyDescription4} onChange={handleChange} />
                </Form.Group>
              </Col>

            </Row>

            <hr />

            {/* ================= Corporate Training ================= */}

            <h4 className="section-heading">
              Corporate Training
            </h4>

            <Row className="g-4">

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Menu Name</Form.Label>
                  <Form.Control type="text" name="corporateMenu" placeholder="Corporate Training" value={featureData.corporateMenu} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Page Title</Form.Label>
                  <Form.Control type="text" name="corporatePageTitle" placeholder="Understanding Corporate Training Needs" value={featureData.corporatePageTitle} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 1 Heading</Form.Label>
                  <Form.Control type="text" name="corporateHeading1" value={featureData.corporateHeading1} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 1 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="corporateDescription1" value={featureData.corporateDescription1} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 2 Heading</Form.Label>
                  <Form.Control type="text" name="corporateHeading2" value={featureData.corporateHeading2} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 2 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="corporateDescription2" value={featureData.corporateDescription2} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 3 Heading</Form.Label>
                  <Form.Control type="text" name="corporateHeading3" value={featureData.corporateHeading3} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 3 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="corporateDescription3" value={featureData.corporateDescription3} onChange={handleChange} />
                </Form.Group>
              </Col>

            </Row>

            <hr />

            {/* Exam Result Checking starts in Part 3 */}


            {/* ================= Exam Result Checking ================= */}

            <h4 className="section-heading">
              Exam Result Checking
            </h4>

            <Row className="g-4">

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Menu Name</Form.Label>
                  <Form.Control type="text" name="examMenu" placeholder="Exam Result Checking" value={featureData.examMenu} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Page Title</Form.Label>
                  <Form.Control type="text" name="examPageTitle" placeholder="Navigating the Exam Result Checking Process" value={featureData.examPageTitle} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 1 Heading</Form.Label>
                  <Form.Control type="text" name="examHeading1" value={featureData.examHeading1} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 1 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="examDescription1" value={featureData.examDescription1} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 2 Heading</Form.Label>
                  <Form.Control type="text" name="examHeading2" value={featureData.examHeading2} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 2 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="examDescription2" value={featureData.examDescription2} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 3 Heading</Form.Label>
                  <Form.Control type="text" name="examHeading3" value={featureData.examHeading3} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 3 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="examDescription3" value={featureData.examDescription3} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 4 Heading</Form.Label>
                  <Form.Control type="text" name="examHeading4" value={featureData.examHeading4} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Section 4 Description</Form.Label>
                  <Form.Control as="textarea" rows={4} name="examDescription4" value={featureData.examDescription4} onChange={handleChange} />
                </Form.Group>
              </Col>

              {/* ================= Status ================= */}

              {/* <Col md={6}>
                <Form.Group>

                  <Form.Label>Status</Form.Label>

                  <Form.Select name="status" value={featureData.status} onChange={handleChange}>
                    <option>Active</option>
                    <option>Inactive</option>
                  </Form.Select>

                </Form.Group>
              </Col> */}

            </Row>

            {/* ================= Buttons ================= */}

            <div className="features-btn-group">

              <Button variant="secondary" type="button" onClick={handleReset}>
                Reset
              </Button>

              <Button variant="primary" type="submit">
                Save Features
              </Button>

            </div>

          </Form>

        </Card.Body>

      </Card>

    </Container>
  );
}

export default Features;