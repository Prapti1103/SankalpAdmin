import api from "./api";

/*
 * GET All Courses
 */
export const getCourses = async () => {
  return await api.get("/course");
};

/*
 * GET Course By ID
 */
export const getCourseById = async (id) => {
  return await api.get(`/course/${id}`);
};

/*
 * CREATE Course
 */
export const createCourse = async (formData) => {
  return await api.post("/course", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * UPDATE Course
 */
export const updateCourse = async (id, formData) => {
  return await api.put(`/course/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * DELETE Course
 */
export const deleteCourse = async (id) => {
  return await api.delete(`/course/${id}`);
};