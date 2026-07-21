import api from "./api";

/*
 * GET All Awards
 */
export const getAwards = async () => {
  return await api.get("/award");
};

/*
 * GET Single Award
 */
export const getAwardById = async (id) => {
  return await api.get(`/award/${id}`);
};

/*
 * CREATE Award
 */
export const createAward = async (formData) => {
  return await api.post("/award", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * UPDATE Award
 */
export const updateAward = async (id, formData) => {
  return await api.put(`/award/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * DELETE Award
 */
export const deleteAward = async (id) => {
  return await api.delete(`/award/${id}`);
};