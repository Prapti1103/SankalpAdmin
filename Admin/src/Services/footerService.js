import api from "./api";

// Get all footer data
export const getFooters = async () => {
  return await api.get("/footer");
};

// Get single footer data
export const getFooterById = async (id) => {
  return await api.get(`/footer/${id}`);
};

// Create footer
export const createFooter = async (formData) => {
  return await api.post("/footer", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update footer
export const updateFooter = async (id, formData) => {
  return await api.put(`/footer/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete footer
export const deleteFooter = async (id) => {
  return await api.delete(`/footer/${id}`);
};