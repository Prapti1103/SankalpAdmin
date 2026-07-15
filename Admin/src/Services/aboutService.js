import api from "./api";

// Get all about section data
export const getAbouts = async () => {
  return await api.get("/about");
};

// Get single about section by id
export const getAboutById = async (id) => {
  return await api.get(`/about/${id}`);
};

// Add new about section
export const createAbout = async (formData) => {
  return await api.post("/about", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update existing about section
export const updateAbout = async (id, formData) => {
  return await api.put(`/about/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete about section
export const deleteAbout = async (id) => {
  return await api.delete(`/about/${id}`);
};