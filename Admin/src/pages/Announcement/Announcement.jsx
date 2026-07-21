import { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import "./Announcement.css";

const Announcement = () => {
  const [showModal, setShowModal] = useState(false);

  const [announcements, setAnnouncements] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    link: "",
  });

  const [preview, setPreview] = useState("");

  return (
    <div className="announcement-page">

      {/* Top Button */}

      <div className="announcement-toolbar">

        <Button
          className="create-btn"
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="me-2" />
          Add Announcement
        </Button>

      </div>

      {/* Table */}

      <Card className="announcement-card">

        <Card.Header className="announcement-header">
          Announcement List
        </Card.Header>

        <Card.Body>

          <div className="announcement-table">

            <table className="announcement-table-ui">

              <thead>
  <tr>

    <th>ID</th>

    <th>Title</th>

    <th>Description</th>

    <th>Image</th>

    <th>Link</th>

    <th>Action</th>

  </tr>
</thead>

              <tbody>

  {announcements.length > 0 ? (

    announcements.map((item, index) => (

      <tr key={item.id}>

        <td>{index + 1}</td>

        <td>{item.title}</td>

        <td className="description-cell">
          {item.description}
        </td>

        <td>

          <img
            src={item.image}
            alt="Announcement"
            className="table-image"
          />

        </td>

        <td>{item.link}</td>

        <td>

          <button className="edit-btn">
            <FaEdit />
          </button>

          <button className="delete-btn">
            <FaTrash />
          </button>

        </td>

      </tr>

    ))

  ) : (

    <tr>

      <td
        colSpan="6"
        className="empty-data"
      >
        No Announcement Found
      </td>

    </tr>

  )}

</tbody>
            </table>

          </div>

        </Card.Body>

      </Card>

      {/* Add Announcement Modal */}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >

        <Modal.Header closeButton>

          <Modal.Title>
            Add Announcement
          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <Form.Group className="mb-3">

            <Form.Label>
              Title
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Title"
            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>
              Description
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter Description"
            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>
              Image
            </Form.Label>

            <Form.Control
              type="file"
            />

          </Form.Group>

          {/* Image Preview */}

          <div className="image-preview">

            No Image Selected

          </div>

          <Form.Group className="mt-3">

            <Form.Label>
              Link
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Link"
            />

          </Form.Group>

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary">
            Cancel
          </Button>

          <Button className="send-btn">
            Send
          </Button>

          <Button className="letter-btn">
            Send Letter
          </Button>

        </Modal.Footer>

      </Modal>

    </div>
  );
};

export default Announcement;