import { createContext, useContext, useState } from "react";
const dataContexte = createContext();

export function useData() {
  const data = useContext(dataContexte);
  return data;
}
export function Provider({ children }) {
  const [isAuthenticated, SetIsAuthenticated] = useState(false);
  const value = { isAuthenticated, SetIsAuthenticated };
  return (
    <dataContexte.Provider value={value}>{children}</dataContexte.Provider>
  );
}
