import axios from "axios";

export const API_BASE = "https://charity-donation-k1fx.onrender.com";

export const api = axios.create({
  baseURL: API_BASE,
});

export function setAuthToken(token) {
  if (token) api.defaults.headers.common.Authorization = `Bearer ${token}`;
  else delete api.defaults.headers.common.Authorization;
}
