import api from "./api";

/*
 * GET All Services
 */
export const getServices = async () => {
  return await api.get("/service");
};

/*
 * GET Single Service
 */
export const getServiceById = async (id) => {
  return await api.get(`/service/${id}`);
};

/*
 * CREATE Service
 */
export const createService = async (formData) => {
  return await api.post("/service", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * UPDATE Service
 */
export const updateService = async (id, formData) => {
  return await api.put(`/service/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * DELETE Service
 */
export const deleteService = async (id) => {
  return await api.delete(`/service/${id}`);
};