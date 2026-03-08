import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("gofit-user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }

    const mockUser = {
      name: "Priyanka",
      email,
      age: 24,
      country: "India",
      weight: 70,
      height: 165,
      goal: 65,
    };

    setUser(mockUser);
    localStorage.setItem("gofit-user", JSON.stringify(mockUser));
    return { success: true };
  };

  const signup = (formData) => {
    setUser(formData);
    localStorage.setItem("gofit-user", JSON.stringify(formData));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("gofit-user");
  };

  const value = useMemo(() => ({ user, login, signup, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
