import api from "./api";

/*
 * GET All Syllabus
 */
export const getSyllabus = async () => {
  return await api.get("/syllabus");
};

/*
 * GET Single Syllabus
 */
export const getSyllabusById = async (id) => {
  return await api.get(`/syllabus/${id}`);
};

/*
 * CREATE Syllabus
 */
export const createSyllabus = async (formData) => {
  return await api.post("/syllabus", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * UPDATE Syllabus
 */
export const updateSyllabus = async (id, formData) => {
  return await api.put(`/syllabus/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * DELETE Syllabus
 */
export const deleteSyllabus = async (id) => {
  return await api.delete(`/syllabus/${id}`);
};