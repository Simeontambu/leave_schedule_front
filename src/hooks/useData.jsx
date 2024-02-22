import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { headers } from "../utils/token";

const dataContexte = createContext();

export function useData() {
  const data = useContext(dataContexte);
  return data;
}
export function Provider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [agents, setAgents] = useState([]);
  const [isAuthenticated, SetIsAuthenticated] = useState(false);
  const [showAllAgents, setShowAllAgents] = useState(false);
  const [showLeaveRequest, setShowLeaveRequest] = useState(false);
  const [showAcceptedRequest, setShowAcceptedRequest] = useState(false);
  const [showOnLeave, setShowOnLeave] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get("http://localhost:8000/api/agents", { headers })
        .then((response) => {
          console.log("response", response);
          setAgents(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);
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
    isLoggedIn,
    setIsLoggedIn,
    agents
  };
  return (
    <dataContexte.Provider value={value}>{children}</dataContexte.Provider>
  );
}
