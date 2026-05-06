import api from "../../services/api";

export const getTracking = async (id) => {
  const res = await api.get(`/tracking/${id}`);
  return res.data;
};