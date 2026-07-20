import api from "./api";

// Get All Contacts
export const getContacts = () => {
  return api.get("/contact");
};

// Get Contact By ID
export const getContactById = (id) => {
  return api.get(`/contact/${id}`);
};

// Delete Contact
export const deleteContact = (id) => {
  return api.delete(`/contact/${id}`);
};