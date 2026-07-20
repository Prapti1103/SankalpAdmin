import api from "./api";

// Get All Faculties
export const getFaculties = () => {
  return api.get("/faculty");
};

// Get Faculty By ID
export const getFacultyById = (id) => {
  return api.get(`/faculty/${id}`);
};

// Create Faculty
export const createFaculty = (facultyData) => {
  return api.post("/faculty", facultyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update Faculty
export const updateFaculty = (id, facultyData) => {
  return api.put(`/faculty/${id}`, facultyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete Faculty
export const deleteFaculty = (id) => {
  return api.delete(`/faculty/${id}`);
};