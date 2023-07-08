import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../api";

type AuthContext = {
  user?: User;
  login: (accessToken: string) => Promise<void>;
  logout: () => Promise<void>;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();

  async function login(accessToken: string) {
    const res = await api.post("/auth/login", { accessToken });
    setUser(res.data.user);

    await AsyncStorage.setItem("token", res.data.token);
    setUser(res.data.token);
  }

  async function logout() {
    await AsyncStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(undefined);
  }

  async function loadUser() {
    const token = await AsyncStorage.getItem("token");
    api.defaults.headers.Authorization = token;
    const res = await api.get("/users/me");
    setUser(res.data);
  }

  useEffect(() => {
    loadUser();
  });

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
