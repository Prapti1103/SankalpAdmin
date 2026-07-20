import api from "./api";

// Get All Awards
export const getAwards = () => {
  return api.get("/award");
};

// Get Award By ID
export const getAwardById = (id) => {
  return api.get(`/award/${id}`);
};

// Create Award
export const createAward = (formData) => {
  return api.post("/award", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update Award
export const updateAward = (id, formData) => {
  return api.put(`/award/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete Award
export const deleteAward = (id) => {
  return api.delete(`/award/${id}`);
};