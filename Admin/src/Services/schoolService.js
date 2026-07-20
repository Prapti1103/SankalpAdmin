import api from "./api";

// Get All Schools
export const getSchools = () => {
  return api.get("/school");
};

// Get School By ID
export const getSchoolById = (id) => {
  return api.get(`/school/${id}`);
};

// Create School
export const createSchool = (schoolData) => {
  return api.post("/school", schoolData);
};

// Update School
export const updateSchool = (id, schoolData) => {
  return api.put(`/school/${id}`, schoolData);
};

// Delete School
export const deleteSchool = (id) => {
  return api.delete(`/school/${id}`);
};