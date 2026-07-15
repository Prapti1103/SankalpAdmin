import api from "./api";

/*
   GET All Hero Sections
 */
export const getHeroes = async () => {
  return await api.get("/hero");
};

/*
   GET Single Hero
*/
export const getHeroById = async (id) => {
  return await api.get(`/hero/${id}`);
};

/* 
   CREATE Hero
 */
export const createHero = async (formData) => {
  return await api.post("/hero", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
   UPDATE Hero
 */
export const updateHero = async (id, formData) => {
  return await api.put(`/hero/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/* 
   DELETE Hero
*/
export const deleteHero = async (id) => {
  return await api.delete(`/hero/${id}`);
};