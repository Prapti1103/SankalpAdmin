import api from "./api";

/*
   GET All Guides
*/
export const getGuides = async () => {
  return await api.get("/guide");
};

/*
   GET Single Guide
*/
export const getGuideById = async (id) => {
  return await api.get(`/guide/${id}`);
};

/*
   CREATE Guide
*/
export const createGuide = async (formData) => {
  return await api.post("/guide", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
   UPDATE Guide
*/
export const updateGuide = async (id, formData) => {
  return await api.put(`/guide/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
   DELETE Guide
*/
export const deleteGuide = async (id) => {
  return await api.delete(`/guide/${id}`);
};