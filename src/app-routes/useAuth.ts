import { useState, useEffect } from "react";
import apiClient from "../api-services/ApiClient";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateSession = async () => {
      try {
        const res = await apiClient.post("/get-token");
        setIsAuthenticated(res.data.message === "active session");
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    validateSession();
  }, []);

  return { isAuthenticated, loading };
}

export default useAuth;
