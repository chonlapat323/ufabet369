// src/context/AuthContext.tsx
"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// สร้าง interface สำหรับ User
interface User {
  id: number;
  username: string;
  balance: number;
  // เพิ่ม field อื่นๆตามต้องการ
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (username: any, password: any) => Promise<User>;
  logout: () => void;
  isLoading: boolean;
  refetchUserProfile: () => Promise<void>; // <-- 1. เพิ่มฟังก์ชัน refetch
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const api = axios.create({
    baseURL: "http://localhost:5000",
  });

  // 2. สร้างฟังก์ชันสำหรับดึงข้อมูล Profile
  const fetchUserProfile = async (authToken: string) => {
    try {
      const response = await api.get("/auth/profile", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setUser(response.data);
      return response.data;
    } catch (error) {
      // ถ้า token ไม่ถูกต้อง ให้เคลียร์ทุกอย่าง
      console.error("Failed to fetch profile", error);
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
      delete api.defaults.headers.common["Authorization"];
      throw error; // ส่ง error ต่อไป
    }
  };

  // ฟังก์ชันที่ export ออกไปให้ข้างนอกใช้
  const refetchUserProfile = async () => {
    if (token) {
      await fetchUserProfile(token);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUserProfile(storedToken).finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { username, password });
      const { access_token } = response.data;

      if (!access_token) {
        throw new Error("ไม่ได้รับ Token จาก Server");
      }

      localStorage.setItem("token", access_token);
      setToken(access_token);

      // หลังจากได้ token แล้ว ให้เรียก fetchUserProfile
      const profile = await fetchUserProfile(access_token);
      return profile;
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    delete api.defaults.headers.common["Authorization"];
  };

  const value = {
    user,
    token,
    login,
    logout,
    isLoading,
    refetchUserProfile, // <-- 3. ส่งฟังก์ชันออกไป
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
