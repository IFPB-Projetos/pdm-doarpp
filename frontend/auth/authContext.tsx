import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../api";

type AuthContext = {
  user?: User;
  login: (accessToken: string) => Promise<void>;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();

  async function login(accessToken: string) {
    const res = await api.post("/auth/login", { accessToken });
    setUser(res.data.user);
    setUser(res.data.token);
  }

  return (
    <authContext.Provider value={{ user, login }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
