import axios, { AxiosError } from "axios";
import { getToken, SERVER_URL } from "./process";

const apiClient = axios.create({
  baseURL: SERVER_URL,
});

apiClient.defaults.headers.common['Content-Type'] = 'application/json';
apiClient.defaults.headers.common['Accept'] = 'application/json';

// Add request interceptor to include the Bearer token
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken(); // Get the token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add the token to headers
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    let errorMessage = "An unexpected error occurred.";

    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("API error:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });

      switch (error.response.status) {
        case 400:
          errorMessage = "Bad Request. Please check your input.";
          break;
        case 401:
          errorMessage = "Unauthorized access - please log in.";
          // alert(errorMessage);
          // window.location.href = '/';
          break;
        case 403:
          errorMessage =
            "Forbidden - you do not have permission to access this resource.";
          break;
        case 404:
          errorMessage = "Resource not found. Please check the URL.";
          break;
        case 422:
          const data = error.response.data as {
            message?: string;
            errors?: Record<string, string[]>;
          };

          if (data.errors) {
            errorMessage = Object.values(data.errors).flat().join(", ");
          } else {
            errorMessage = data.message || "Validation error occurred.";
          }
          break;
        case 500:
          errorMessage = "Server error occurred. Please try again later.";
          break;
        default:
          errorMessage = `An error occurred: ${error.response.status}`;
      }
    } else if (error.request) {
      // No response received
      console.error("Network error:", {
        message: error.message,
        config: error.config,
      });
      errorMessage = "Network error. Please check your connection.";
    } else {
      // Something else happened
      console.error("Unexpected error:", {
        message: error.message,
        config: error.config,
      });
      errorMessage = "Unexpected error. Please try again later.";
    }

    // Optionally, you can return a custom error object or message
    return Promise.reject(errorMessage);
  }
);

export default apiClient;
