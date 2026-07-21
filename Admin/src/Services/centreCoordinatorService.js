import api from "./api";

// Get All Coordinators
export const getCoordinators = () => {
  return api.get("/coordinators");
};

// Get Single Coordinator
export const getCoordinatorById = (id) => {
  return api.get(`/coordinators/${id}`);
};

// Create Coordinator
export const createCoordinator = (coordinatorData) => {
  return api.post("/coordinators", coordinatorData);
};

// Update Coordinator
export const updateCoordinator = (id, coordinatorData) => {
  return api.put(`/coordinators/${id}`, coordinatorData);
};

// Delete Coordinator
export const deleteCoordinator = (id) => {
  return api.delete(`/coordinators/${id}`);
};