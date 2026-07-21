import api from "./api";

// Get All Exam Centres
export const getExamCentres = () => {
  return api.get("/exam-centres");
};

// Get Single Exam Centre
export const getExamCentreById = (id) => {
  return api.get(`/exam-centres/${id}`);
};

// Create Exam Centre
export const createExamCentre = (examCentreData) => {
  return api.post("/exam-centres", examCentreData);
};

// Update Exam Centre
export const updateExamCentre = (id, examCentreData) => {
  return api.put(`/exam-centres/${id}`, examCentreData);
};

// Delete Exam Centre
export const deleteExamCentre = (id) => {
  return api.delete(`/exam-centres/${id}`);
};