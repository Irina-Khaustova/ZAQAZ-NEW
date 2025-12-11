import axios from 'axios';
import { LoginData } from '../types/authorization';

const API_URL = "http://5.35.104.57:8080/api";
const apiClient = axios.create ({
  baseURL: API_URL,
  headers: {
  }
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("key");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const apiRequest = async (method: "GET" | "POST" | "PUT" | "DELETE", endpoint: string, data?:  any): Promise<any> => {
    try {
      const response = await apiClient({
        method,
        url: endpoint,
        data,
      });
      return response.data;
    } catch (error) {
      console.error(`Ошибка при ${method.toUpperCase()} запросе`, error);
      throw error;
    }
  };

  export const userAPI = {
    logIn: (data :LoginData) => apiRequest("POST", `/v1/auth/staff`, data),
  };

