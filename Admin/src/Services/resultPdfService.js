import api from "./api";

/*
 * GET All Result PDFs
 */
export const getResultPDFs = async () => {
  return await api.get("/result-pdf");
};

/*
 * GET Single Result PDF
 */
export const getResultPDFById = async (id) => {
  return await api.get(`/result-pdf/${id}`);
};

/*
 * CREATE Result PDF
 */
export const createResultPDF = async (formData) => {
  return await api.post("/result-pdf", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * UPDATE Result PDF
 */
export const updateResultPDF = async (id, formData) => {
  return await api.put(`/result-pdf/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/*
 * DELETE Result PDF
 */
export const deleteResultPDF = async (id) => {
  return await api.delete(`/result-pdf/${id}`);
};