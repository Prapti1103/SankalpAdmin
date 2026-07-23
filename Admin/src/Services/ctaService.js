import api from "./api";

/*
 * GET All CTA
 */
export const getCTAs = async () => {
  return await api.get("/cta");
};

/*
 * GET Single CTA
 */
export const getCTAById = async (id) => {
  return await api.get(`/cta/${id}`);
};

/*
 * CREATE CTA
 */
export const createCTA = async (data) => {
  return await api.post("/cta", data);
};

/*
 * UPDATE CTA
 */
export const updateCTA = async (id, data) => {
  return await api.put(`/cta/${id}`, data);
};

/*
 * DELETE CTA
 */
export const deleteCTA = async (id) => {
  return await api.delete(`/cta/${id}`);
};