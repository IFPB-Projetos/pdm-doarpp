import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../common/api";
import { User } from "../types/user";

type AuthContext = {
  user: User | null;
  login: (accessToken: string) => Promise<void>;
  logout: () => Promise<void>;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  async function login(accessToken: string) {
    const res = await api.post("/auth/login", { accessToken });
    const { token, user } = res.data;
    setToken(token);
    setUser(user);
  }

  async function logout() {
    setUser(null);
    setToken(null);
    router.replace("/login");
  }

  async function setToken(token: string | null) {
    api.defaults.headers.Authorization = token;
    if (token) {
      await AsyncStorage.setItem("token", token);
    } else {
      await AsyncStorage.removeItem("token");
    }
  }

  async function loadUser() {
    const token = await AsyncStorage.getItem("token");
    api.defaults.headers.Authorization = token;
    const res = await api.get<User | null>("/users/me");
    const user = res.data;
    setUser(user);

    if (!user) {
      setToken(null);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
