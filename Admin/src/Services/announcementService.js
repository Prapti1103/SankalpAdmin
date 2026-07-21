import api from "./api";

/*
   GET All Announcements
*/
export const getAnnouncements = async () => {
  return await api.get("/announcement");
};

/*
   GET Single Announcement
*/
export const getAnnouncementById = async (id) => {
  return await api.get(`/announcement/${id}`);
};

/*
   CREATE Announcement
*/
export const createAnnouncement = async (formData) => {
  return await api.post("/announcement", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
   UPDATE Announcement
*/
export const updateAnnouncement = async (id, formData) => {
  return await api.put(`/announcement/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
   DELETE Announcement
*/
export const deleteAnnouncement = async (id) => {
  return await api.delete(`/announcement/${id}`);
};