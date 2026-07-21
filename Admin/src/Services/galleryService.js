import api from "./api";

/*
 * GET All Gallery Images
 */
export const getGallery = async () => {
  return await api.get("/gallery");
};

/*
 * GET Gallery By ID
 */
export const getGalleryById = async (id) => {
  return await api.get(`/gallery/${id}`);
};

/*
 * CREATE Gallery
 */
export const createGallery = async (formData) => {
  return await api.post("/gallery", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * UPDATE Gallery
 */
export const updateGallery = async (id, formData) => {
  return await api.put(`/gallery/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * DELETE Gallery
 */
export const deleteGallery = async (id) => {
  return await api.delete(`/gallery/${id}`);
};