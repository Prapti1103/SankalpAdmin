import api from "./api";

/*
 * GET All Result Checks
 */
export const getResultChecks = async () => {
  return await api.get("/result-check");
};

/*
 * GET Single Result Check
 */
export const getResultCheckById = async (id) => {
  return await api.get(`/result-check/${id}`);
};

/*
 * CREATE Result Check
 */
export const createResultCheck = async (formData) => {
  return await api.post("/result-check", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * UPDATE Result Check
 */
export const updateResultCheck = async (id, formData) => {
  return await api.put(`/result-check/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * DELETE Result Check
 */
export const deleteResultCheck = async (id) => {
  return await api.delete(`/result-check/${id}`);
};