import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import "./Guide.css";

function Guide() {
  // ===========================
  // Guide Home Data
  // ===========================

  const [guideData, setGuideData] = useState({
    guideTitle: "How to Guide",
    card1: "",
    card2: "",
    card3: "",
    leftDiscoverTitle: "Discover More",
    leftItem1: "",
    leftItem2: "",
    leftItem3: "",
    rightDiscoverTitle: "Discover More",
    status: "Active",
  });

  // ===========================
  // Featured Guide Cards
  // ===========================

  const [cards, setCards] = useState([
    { title: "", image: null, preview: "" },
    { title: "", image: null, preview: "" },
    { title: "", image: null, preview: "" },
  ]);

  // ===========================
  // Left Discover Items
  // ===========================

  const [leftItems, setLeftItems] = useState([
    { title: "", link: "", order: 1 },
    { title: "", link: "", order: 2 },
    { title: "", link: "", order: 3 },
  ]);

  // ===========================
  // Right Discover Items
  // ===========================

  const [rightItems, setRightItems] = useState([
    { title: "", link: "", order: 1 },
  ]);

  // ===========================
  // Guide Post
  // ===========================

  const [guidePost, setGuidePost] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    fullDescription: "",
    category: "",
    tags: "",
    youtube: "",
    image: null,
    imagePreview: "",
    pdf: null,
    status: "Active",
  });

  // ===========================
  // Related Posts
  // ===========================

  const [relatedPosts, setRelatedPosts] = useState([]);

  // ===========================
  // Handle Normal Input
  // ===========================

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuideData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ===========================
  // Guide Post Change
  // ===========================

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setGuidePost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ===========================
  // Featured Card Change
  // ===========================

  const handleCardTitle = (index, value) => {
    const updated = [...cards];
    updated[index].title = value;
    setCards(updated);
  };

  // ===========================
  // Card Image
  // ===========================

  const handleCardImage = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const updated = [...cards];
    updated[index].image = file;
    updated[index].preview = URL.createObjectURL(file);
    setCards(updated);
  };

  // ===========================
  // Guide Post Image
  // ===========================

  const handlePostImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setGuidePost((prev) => ({
      ...prev,
      image: file,
      imagePreview: URL.createObjectURL(file),
    }));
  };

  // ===========================
  // PDF Upload
  // ===========================

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setGuidePost((prev) => ({
      ...prev,
      pdf: file,
    }));
  };

  // ===========================
  // Left Discover Item Change
  // ===========================

  const handleLeftItemChange = (index, field, value) => {
    const updated = [...leftItems];
    updated[index][field] = value;
    setLeftItems(updated);
  };

  // ===========================
  // Right Discover Item Change
  // ===========================

  const handleRightItemChange = (index, field, value) => {
    const updated = [...rightItems];
    updated[index][field] = value;
    setRightItems(updated);
  };

  // ===========================
  // Add Left Discover Item
  // ===========================

  const addLeftItem = () => {
    setLeftItems([
      ...leftItems,
      { title: "", link: "", order: leftItems.length + 1 },
    ]);
  };

  // ===========================
  // Add Right Discover Item
  // ===========================

  const addRightItem = () => {
    setRightItems([
      ...rightItems,
      { title: "", link: "", order: rightItems.length + 1 },
    ]);
  };

  // ===========================
  // Delete Left Item
  // ===========================

  const removeLeftItem = (index) => {
    const updated = [...leftItems];
    updated.splice(index, 1);
    setLeftItems(updated);
  };

  // ===========================
  // Delete Right Item
  // ===========================

  const removeRightItem = (index) => {
    const updated = [...rightItems];
    updated.splice(index, 1);
    setRightItems(updated);
  };

  // ===========================
  // Related Post
  // ===========================

  const handleRelatedPost = (e) => {
    const value = e.target.value;
    if (value === "") return;

    setRelatedPosts([...relatedPosts, value]);
    e.target.value = "";
  };

  const removeRelatedPost = (index) => {
    const updated = [...relatedPosts];
    updated.splice(index, 1);
    setRelatedPosts(updated);
  };

  // ===========================
  // Submit
  // ===========================

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      guideData,
      cards,
      leftItems,
      rightItems,
      guidePost,
      relatedPosts,
    };
    console.log(formData);
    alert("Guide Saved Successfully");
  };

  // ===========================
  // Reset
  // ===========================

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <Container fluid className="guide-page">
      <Card className="guide-card shadow-sm">
        <Card.Body>
          <div className="page-title">
            <h2>Guide Management</h2>
            <p>Manage Guide Section Content</p>
          </div>

          <Form onSubmit={handleSubmit}>
            {/* ================= Featured Guide Cards ================= */}
            <h4 className="section-title">Featured Guide Cards</h4>
            <Row className="g-4">
              {cards.map((card, index) => (
                <Col md={4} key={index}>
                  <Card className="upload-card">
                    <Card.Body>
                      <Form.Group className="mb-3">
                        <Form.Label>Card Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Card Title" value={card.title} onChange={(e) => handleCardTitle(index, e.target.value)} />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Card Image</Form.Label>
                        <Form.Control type="file" accept="image/*" onChange={(e) => handleCardImage(index, e)} />
                      </Form.Group>

                      <div className="preview-box mt-3">
                        {card.preview ? <img src={card.preview} alt="" /> : <span>No Preview</span>}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* ================= Guide Post ================= */}
            <h4 className="section-title mt-5">Guide Post Details</h4>
            <Row className="g-4">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Post Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter Post Title" name="title" value={guidePost.title} onChange={handlePostChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Slug</Form.Label>
                  <Form.Control type="text" placeholder="announcement-2026" name="slug" value={guidePost.slug} onChange={handlePostChange} />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={8} placeholder="Enter Complete Guide Description..." name="description" value={guidePost.description} onChange={handlePostChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" placeholder="Education" name="category" value={guidePost.category} onChange={handlePostChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Tags</Form.Label>
                  <Form.Control type="text" placeholder="Exam, Result, Education" name="tags" value={guidePost.tags} onChange={handlePostChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>YouTube URL</Form.Label>
                  <Form.Control type="text" placeholder="https://youtube.com/..." name="youtube" value={guidePost.youtube} onChange={handlePostChange} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Select name="status" value={guidePost.status} onChange={handlePostChange}>
                    <option>Active</option>
                    <option>Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Upload Post Image</Form.Label>
                  <Form.Control type="file" accept="image/*" onChange={handlePostImage} />
                </Form.Group>
                <div className="preview-box mt-3">
                  {guidePost.imagePreview ? <img src={guidePost.imagePreview} alt="" /> : <span>No Image</span>}
                </div>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Upload PDF</Form.Label>
                  <Form.Control type="file" accept=".pdf" onChange={handlePdfUpload} />
                </Form.Group>
                <div className="pdf-box mt-3">
                  {guidePost.pdf ? <p>{guidePost.pdf.name}</p> : <span>No PDF Selected</span>}
                </div>
              </Col>
            </Row>

            {/* ================= Discover More ================= */}
            <h4 className="section-title mt-5">Discover More</h4>
            <Row className="g-4">
              {/* Left Side */}
              <Col lg={6}>
                <Card className="inner-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5>Left Discover Menu</h5>
                      <Button variant="success" size="sm" onClick={addLeftItem}>+ Add</Button>
                    </div>

                    {leftItems.map((item, index) => (
                      <Card className="mb-3 shadow-sm" key={index}>
                        <Card.Body>
                          <Row className="g-3">
                            <Col md={6}>
                              <Form.Group>
                                <Form.Label>Menu Title</Form.Label>
                                <Form.Control type="text" value={item.title} onChange={(e) => handleLeftItemChange(index, "title", e.target.value)} />
                              </Form.Group>
                            </Col>

                            <Col md={6}>
                              <Form.Group>
                                <Form.Label>Page Link</Form.Label>
                                <Form.Control type="text" value={item.link} onChange={(e) => handleLeftItemChange(index, "link", e.target.value)} />
                              </Form.Group>
                            </Col>

                            <Col md={4}>
                              <Form.Group>
                                <Form.Label>Display Order</Form.Label>
                                <Form.Control type="number" value={item.order} onChange={(e) => handleLeftItemChange(index, "order", e.target.value)} />
                              </Form.Group>
                            </Col>

                            <Col md={8} className="d-flex align-items-end justify-content-end">
                              <Button variant="danger" onClick={() => removeLeftItem(index)}>Delete</Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    ))}
                  </Card.Body>
                </Card>
              </Col>

              {/* Right Side */}
              <Col lg={6}>
                <Card className="inner-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5>Right Discover Menu</h5>
                      <Button variant="success" size="sm" onClick={addRightItem}>+ Add</Button>
                    </div>

                    {rightItems.map((item, index) => (
                      <Card className="mb-3 shadow-sm" key={index}>
                        <Card.Body>
                          <Row className="g-3">
                            <Col md={6}>
                              <Form.Group>
                                <Form.Label>Menu Title</Form.Label>
                                <Form.Control type="text" value={item.title} onChange={(e) => handleRightItemChange(index, "title", e.target.value)} />
                              </Form.Group>
                            </Col>

                            <Col md={6}>
                              <Form.Group>
                                <Form.Label>Page Link</Form.Label>
                                <Form.Control type="text" value={item.link} onChange={(e) => handleRightItemChange(index, "link", e.target.value)} />
                              </Form.Group>
                            </Col>

                            <Col md={4}>
                              <Form.Group>
                                <Form.Label>Display Order</Form.Label>
                                <Form.Control type="number" value={item.order} onChange={(e) => handleRightItemChange(index, "order", e.target.value)} />
                              </Form.Group>
                            </Col>

                            <Col md={8} className="d-flex align-items-end justify-content-end">
                              <Button variant="danger" onClick={() => removeRightItem(index)}>Delete</Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* ================= Related Posts ================= */}
            <h4 className="section-title mt-5">Related Posts</h4>
            <Row className="g-4">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Select Related Post</Form.Label>
                  <Form.Select onChange={handleRelatedPost}>
                    <option value="">Select Post</option>
                    <option>Announcement</option>
                    <option>Answer Key</option>
                    <option>Corporate Training</option>
                    <option>Psychology</option>
                    <option>Student Login</option>
                    <option>High Quality Education</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Table bordered hover responsive className="mt-3">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Related Post</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {relatedPosts.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="text-center">No Related Post Added</td>
                      </tr>
                    ) : (
                      relatedPosts.map((post, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{post}</td>
                          <td>
                            <Button variant="danger" size="sm" onClick={() => removeRelatedPost(index)}>Delete</Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </Col>
            </Row>

            <hr />

            {/* ================= Buttons ================= */}
            <div className="guide-btn-group">
              <Button variant="secondary" type="button" onClick={handleReset}>Reset</Button>
              <Button variant="primary" type="submit">Save Guide</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Guide;