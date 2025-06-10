import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  login: (
    email: string,
    password: string,
    role: "athlete" | "trainer",
  ) => Promise<boolean>;
  register: (
    name: string,
    email: string,
    password: string,
    role: "athlete" | "trainer",
  ) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (
    email: string,
    password: string,
    role: "athlete" | "trainer",
  ): Promise<boolean> => {
    // Простая моковая авторизация
    const mockUser: User = {
      id: Date.now().toString(),
      name: email.split("@")[0],
      email,
      role,
    };

    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
    return true;
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    role: "athlete" | "trainer",
  ): Promise<boolean> => {
    const mockUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role,
    };

    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  React.useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
