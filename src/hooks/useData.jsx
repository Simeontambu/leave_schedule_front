import { createContext, useContext, useState } from "react";
const dataContexte = createContext();

export function useData() {
  const data = useContext(dataContexte);
  return data;
}
export function Provider({ children }) {
  const [isAuthenticated, SetIsAuthenticated] = useState(false);
  const [showAllAgents, setShowAllAgents] = useState(false);
  const [showLeaveRequest, setShowLeaveRequest] = useState(false);
  const [showAcceptedRequest, setShowAcceptedRequest] = useState(false);
  const [showOnLeave, setShowOnLeave] = useState(false);
  const value = {
    isAuthenticated,
    SetIsAuthenticated,
    showAllAgents,
    setShowAllAgents,
    showLeaveRequest,
    setShowLeaveRequest,
    setShowAcceptedRequest,
    showAcceptedRequest,
    showOnLeave,
    setShowOnLeave,
  };
  return (
    <dataContexte.Provider value={value}>{children}</dataContexte.Provider>
  );
}
