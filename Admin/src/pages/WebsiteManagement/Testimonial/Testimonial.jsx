import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsPlusCircle, BsArrowLeft } from "react-icons/bs";
import "./Testimonial.css";

import TestimonialForm from "./TestimonialForm";
import TestimonialList from "./TestimonialList";

function Testimonial() {
  const [showForm, setShowForm] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [editTestimonial, setEditTestimonial] = useState(null);

  // Open Create Form
  const handleCreate = () => {
    setEditTestimonial(null);
    setShowForm(true);
  };

  // Close Form
  const handleCancel = () => {
    setShowForm(false);
    setEditTestimonial(null);
  };

  // Save / Update
  const handleSave = (formData) => {
    if (editTestimonial) {
      setTestimonials((prev) =>
        prev.map((item) =>
          item.id === editTestimonial.id
            ? {
                ...item,
                ...formData,
              }
            : item
        )
      );
    } else {
      const newTestimonial = {
        id:
          testimonials.length === 0
            ? 1
            : Math.max(...testimonials.map((item) => item.id)) + 1,
        ...formData,
      };

      setTestimonials((prev) => [newTestimonial, ...prev]);
    }

    setShowForm(false);
    setEditTestimonial(null);
  };

  // Edit
  const handleEdit = (testimonial) => {
    setEditTestimonial(testimonial);
    setShowForm(true);
  };

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this testimonial?"
    );

    if (!confirmDelete) return;

    setTestimonials((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="testimonial-page">
      {!showForm ? (
        <>
          {/* Toolbar */}

          <div className="testimonial-toolbar">
            <Button
              className="create-btn"
              onClick={handleCreate}
            >
              <BsPlusCircle className="me-2" />
              Add Testimonial
            </Button>
          </div>

          {/* Table */}

          <TestimonialList
            testimonials={testimonials}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </>
      ) : (
        <>
          {/* Back Button */}

          <Button
            variant="secondary"
            className="mb-3"
            onClick={handleCancel}
          >
            <BsArrowLeft className="me-2" />
            Back
          </Button>

          {/* Form */}

          <TestimonialForm
            testimonial={editTestimonial}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </>
      )}
    </div>
  );
}

export default Testimonial;