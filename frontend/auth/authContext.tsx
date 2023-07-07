import { ReactNode, createContext, useContext, useState } from "react";

type AuthContext = {
  user?: User;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
