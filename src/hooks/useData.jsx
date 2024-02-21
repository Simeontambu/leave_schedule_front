import { createContext, useContext, useState } from "react";
const dataContexte = createContext();

export function useData() {
  const data = useContext(dataContexte);
  return data;
}
export function Provider({ children }) {
  const [isAuthenticated, SetIsAuthenticated] = useState(true);
  const [showAllAgents, setShowAllAgents] = useState(false);
  const [showLeaveRequest, setshowLeaveRequest] = useState(false);
  const [showAcceptedRequest, setshowAcceptedRequest] = useState(false);
  const [showOnLeave, setshowOnLeave] = useState(false);
  const value = {
    isAuthenticated,
    SetIsAuthenticated,
    showAllAgents,
    setShowAllAgents,
    showLeaveRequest,
    setshowLeaveRequest,
  };
  return (
    <dataContexte.Provider value={value}>{children}</dataContexte.Provider>
  );
}
