import api from "./api";

export const getHeroes = () => api.get("/hero");

export const getHeroById = (id) => api.get(`/hero/${id}`);

export const createHero = (formData) =>
  api.post("/hero", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateHero = (id, formData) =>
  api.put(`/hero/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteHero = (id) => api.delete(`/hero/${id}`);