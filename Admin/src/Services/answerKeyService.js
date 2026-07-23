import api from "./api";

/*
 * GET All Answer Keys
 */
export const getAnswerKeys = async () => {
  return await api.get("/answer-key");
};

/*
 * GET Single Answer Key
 */
export const getAnswerKeyById = async (id) => {
  return await api.get(`/answer-key/${id}`);
};

/*
 * CREATE Answer Key
 */
export const createAnswerKey = async (formData) => {
  return await api.post("/answer-key", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * UPDATE Answer Key
 */
export const updateAnswerKey = async (id, formData) => {
  return await api.put(`/answer-key/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * DELETE Answer Key
 */
export const deleteAnswerKey = async (id) => {
  return await api.delete(`/answer-key/${id}`);
};