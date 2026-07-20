import api from "./api";

// Get all features data
export const getFeatures = async () => {
  return await api.get("/features");
};

// Get single features data
export const getFeatureById = async (id) => {
  return await api.get(`/features/${id}`);
};

// Create features
export const createFeature = async (formData) => {
  return await api.post("/features", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update features
export const updateFeature = async (id, formData) => {
  return await api.put(`/features/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete features
export const deleteFeature = async (id) => {
  return await api.delete(`/features/${id}`);
};