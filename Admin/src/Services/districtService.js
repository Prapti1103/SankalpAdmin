

import api from "./api";

// Get All Districts
export const getDistricts = () => {
  return api.get("/districts");
};

// Get Single District
export const getDistrictById = (id) => {
  return api.get(`/districts/${id}`);
};

// Create District
export const createDistrict = (districtData) => {
  return api.post("/districts", districtData);
};

// Update District
export const updateDistrict = (id, districtData) => {
  return api.put(`/districts/${id}`, districtData);
};

// Delete District
export const deleteDistrict = (id) => {
  return api.delete(`/districts/${id}`);
};