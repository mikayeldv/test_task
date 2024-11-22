import { api } from "../helpers/api";

export const getCountryApi = async () => {
  return await api.get(`/countries_for_sale`);
};
