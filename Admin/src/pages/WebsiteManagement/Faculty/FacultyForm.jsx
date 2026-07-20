import { useState, useEffect } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { BsTrash, BsUpload, BsXCircle } from "react-icons/bs";

function FacultyForm({ faculty, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    facultyName: "",
    experience: "",
    subject: "",
    education: "",
    description: "",
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  /* Edit Mode */
  useEffect(() => {
    if (faculty) {
      setFormData({
        facultyName: faculty.facultyName || "",
        experience: faculty.experience || "",
        subject: faculty.subject || "",
        education: faculty.education || "",
        description: faculty.description || "",
        photo: faculty.photo || null,
      });

      if (faculty.photo) {
        if (typeof faculty.photo === "string") {
          setPreview(faculty.photo);
        } else {
          const objectUrl = URL.createObjectURL(faculty.photo);
          setPreview(objectUrl);
          // Cleanup: revoke this blob URL when faculty changes or component unmounts
          return () => URL.revokeObjectURL(objectUrl);
        }
      } else {
        setPreview(null);
      }
    }
  }, [faculty]);

  /* Handle Input */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* Handle Image */
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Revoke the previous blob URL before creating a new one, so old ones don't leak
    if (preview && typeof formData.photo !== "string") {
      URL.revokeObjectURL(preview);
    }

    setFormData({ ...formData, photo: file });
    setPreview(URL.createObjectURL(file));
  };

  /* Remove Image */
  const removeImage = () => {
    if (preview && typeof formData.photo !== "string") {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    setFormData({ ...formData, photo: null });
  };

  /* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Card className="faculty-card shadow">
      <Card.Header className="faculty-header">{faculty ? "Edit Faculty" : "Add New Faculty"}</Card.Header>

      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Faculty Image */}
            <Col lg={4}>
              <Form.Group>
                <Form.Label>Faculty Photo<small className="text-muted d-block">Upload faculty profile image</small></Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleImage} />
              </Form.Group>

              <div className="preview-box mt-3">
                {preview ? (
                  <>
                    <img src={preview} alt="Preview" className="preview-image" />
                    <Button variant="danger" size="sm" className="mt-3" onClick={removeImage}><BsTrash className="me-2" />Remove</Button>
                  </>
                ) : (
                  <div className="empty-preview">No Image Selected</div>
                )}
              </div>
            </Col>

            {/* Faculty Details */}
            <Col lg={8}>
              {/* Faculty Name */}
              <Form.Group className="mb-3">
                <Form.Label>Faculty Name</Form.Label>
                <Form.Control type="text" name="facultyName" placeholder="Faculty Name" value={formData.facultyName} onChange={handleChange} />
              </Form.Group>

              {/* Experience */}
              <Form.Group className="mb-3">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" name="experience" placeholder="10 Years" value={formData.experience} onChange={handleChange} />
              </Form.Group>

              {/* Subject */}
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
              </Form.Group>

              {/* Education */}
              <Form.Group className="mb-3">
                <Form.Label>Education</Form.Label>
                <Form.Control type="text" name="education" placeholder="Education" value={formData.education} onChange={handleChange} />
              </Form.Group>

              {/* Description */}
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
              </Form.Group>

              {/* Buttons */}
              <div className="d-flex gap-2 mt-4">
                <Button type="submit" className="save-btn"><BsUpload className="me-2" />{faculty ? "Update Faculty" : "Save Faculty"}</Button>
                <Button variant="secondary" onClick={onCancel}><BsXCircle className="me-2" />Cancel</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default FacultyForm;
