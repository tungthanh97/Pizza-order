import { API } from "./api";

export const getAllEntity = (URL) => async () => {
  const { data } = await API.get(URL);
  return data;
};

export const getEntityById = (URL) => async (id) => {
  const { data } = await API.get(`${URL}/${id}`);
  return data;
};

export const deleteEntity = (URL) => async (id) => {
  const { data } = await API.delete(`${URL}/${id}`);
  return data;
};

export const createEntity = (URL) => async (entity) => {
  const { data } = await API.post(`${URL}`, entity);
  return data;
};
