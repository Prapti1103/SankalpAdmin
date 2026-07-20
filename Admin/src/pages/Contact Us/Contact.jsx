import { useState } from "react";
import ContactList from "./ContactList";
import "./Contact.css";

const Contact = () => {
  // Temporary Dummy Data
  const [contacts, setContacts] = useState([ ]);

  // Delete Contact
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div className="contact-page">
      <ContactList
        contacts={contacts}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Contact;