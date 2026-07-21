import api from "./api";

// Get All Talukas
export const getTalukas = () => {
  return api.get("/talukas");
};

// Get Single Taluka
export const getTalukaById = (id) => {
  return api.get(`/talukas/${id}`);
};

// Create Taluka
export const createTaluka = (talukaData) => {
  return api.post("/talukas", talukaData);
};

// Update Taluka
export const updateTaluka = (id, talukaData) => {
  return api.put(`/talukas/${id}`, talukaData);
};

// Delete Taluka
export const deleteTaluka = (id) => {
  return api.delete(`/talukas/${id}`);
};