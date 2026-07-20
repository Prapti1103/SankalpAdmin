import api from "./api";

// Get All Toppers
export const getToppers = async () => {
  const response = await api.get("/topper");
  return response.data;
};

// Get Topper By ID
export const getTopperById = async (id) => {
  const response = await api.get(`/topper/${id}`);
  return response.data;
};

// Create Topper
export const createTopper = async (formData) => {
  const response = await api.post("/topper", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Update Topper
export const updateTopper = async (id, formData) => {
  const response = await api.put(`/topper/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Delete Topper
export const deleteTopper = async (id) => {
  const response = await api.delete(`/topper/${id}`);
  return response.data;
};