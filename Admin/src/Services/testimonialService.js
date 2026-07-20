import api from "./api";

// Get All Testimonials
export const getTestimonials = () => {
  return api.get("/testimonial");
};

// Get Testimonial By ID
export const getTestimonialById = (id) => {
  return api.get(`/testimonial/${id}`);
};

// Create Testimonial
export const createTestimonial = (testimonialData) => {
  return api.post("/testimonial", testimonialData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update Testimonial
export const updateTestimonial = (id, testimonialData) => {
  return api.put(`/testimonial/${id}`, testimonialData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete Testimonial
export const deleteTestimonial = (id) => {
  return api.delete(`/testimonial/${id}`);
};