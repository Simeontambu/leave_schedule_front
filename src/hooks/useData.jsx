import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
// import { headers } from "../utils/token";
import { useNavigate } from "react-router-dom";

const dataContexte = createContext();

export function useData() {
  const data = useContext(dataContexte);
  return data;
}
export function Provider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [agents, setAgents] = useState([]);
  const [userData, setUserData] = useState({});
  const [planningData, setPlanningData] = useState({});
  const [isAuthenticated, SetIsAuthenticated] = useState(false);
  const [showAllAgents, setShowAllAgents] = useState(false);
  const [showAgents, setShowAgents] = useState(false);
  const [showLeaveRequest, setShowLeaveRequest] = useState(false);
  const [showAcceptedRequest, setShowAcceptedRequest] = useState(false);
  const [showOnLeave, setShowOnLeave] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [token, setToken] = useState();

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .all([
          axios.get("http://localhost:8000/api/agents", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:8000/api/user", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:8000/api/conge", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ])
        .then(([agentsResponse, userResponse, planningResponse]) => {
          setAgents(agentsResponse.data);
          setUserData(userResponse.data);
          setPlanningData(planningResponse.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  const disconnect = () => {
    setUserData({});
    setIsLoggedIn(false);
    setToken();
    // localStorage.removeItem(auth_token);
  };

console.log(alert);

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
    agents,
    searchText,
    setSearchText,
    showAgents,
    setShowAgents,
    userData,
    planningData,
    setPlanningData,
    setUserData,
    disconnect,
    setToken,
    token,
  };
  return (
    <dataContexte.Provider value={value}>{children}</dataContexte.Provider>
  );
}
