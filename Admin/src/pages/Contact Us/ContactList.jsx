import { useState } from "react";
import { Card, Form, Modal, Button } from "react-bootstrap";
import { FaSearch, FaEye, FaTrash } from "react-icons/fa";

const ContactList = ({ contacts, onDelete }) => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const filteredContacts = contacts.filter((contact) => {
    const keyword = search.toLowerCase();

    return (
      contact.name.toLowerCase().includes(keyword) ||
      contact.mobile.includes(search) ||
      contact.email.toLowerCase().includes(keyword) ||
      contact.subject.toLowerCase().includes(keyword)
    );
  });

  const handleView = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  return (
    <div className="contact-page">

      {/* Toolbar */}

      <div className="contact-toolbar">

        <div className="search-box">
          <FaSearch className="search-icon" />

          <Form.Control type="text" placeholder="Search Contact..." value={search} onChange={(e) => setSearch(e.target.value)} />

        </div>

      </div>

      {/* Table */}

      <Card className="contact-card">

        <Card.Header className="contact-header">
          Contact List
        </Card.Header>

        <Card.Body>

          <div className="contact-table">

            <table className="contact-table-ui">

              <thead>

                <tr>

                  <th>ID</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredContacts.length > 0 ? (

                  filteredContacts.map((contact, index) => (

                    <tr key={contact.id}>

                      <td>{index + 1}</td>

                      <td>{contact.name}</td>

                      <td>{contact.mobile}</td>

                      <td>{contact.email}</td>

                      <td>{contact.subject}</td>

                      <td>{contact.date}</td>

                      <td>

                        <div className="action-buttons">

                          <button className="view-btn" onClick={() => handleView(contact)}>
                            <FaEye />
                          </button>

                          <button className="delete-btn" onClick={() => onDelete(contact.id)}>
                            <FaTrash />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td colSpan="7" className="empty-data">
                      No Contact Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </Card.Body>

      </Card>

      {/* View Modal */}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>

        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          {selectedContact && (
            <>
              <p><strong>Name :</strong> {selectedContact.name}</p>

              <p><strong>Mobile :</strong> {selectedContact.mobile}</p>

              <p><strong>Email :</strong> {selectedContact.email}</p>

              <p><strong>Subject :</strong> {selectedContact.subject}</p>

              <p><strong>Message :</strong></p>

              <div
                style={{
                  background: "#f8f9fa",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                {selectedContact.message}
              </div>
            </>
          )}

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>

        </Modal.Footer>

      </Modal>

    </div>
  );
};

export default ContactList;