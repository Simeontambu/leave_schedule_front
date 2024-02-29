import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const dataContexte = createContext();

export function useData() {
  const data = useContext(dataContexte);
  return data;
}
export function Provider({ children }) {
  const [agents, setAgents] = useState([]);
  const [userData, setUserData] = useState({});
  const [planningData, setPlanningData] = useState({});
  const [planning, setPlanning] = useState({});
  const [isAuthenticated, SetIsAuthenticated] = useState(false);
  const [showAllAgents, setShowAllAgents] = useState(false);
  const [showAgents, setShowAgents] = useState(false);
  const [showLeaveRequest, setShowLeaveRequest] = useState(false);
  const [showAcceptedRequest, setShowAcceptedRequest] = useState(false);
  const [showOnLeave, setShowOnLeave] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

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
          axios.get("http://localhost:8000/api/planning", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ])
        .then(
          ([
            agentsResponse,
            userResponse,
            planningDataResponse,
            planningResponse,
          ]) => {
            setAgents(agentsResponse.data);
            setUserData(userResponse.data);
            setPlanningData(planningDataResponse.data);

            setPlanning(planningResponse.data);
           
          }
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  const disconnect = () => {
    setUserData({});
    setIsLoggedIn(false);
    setToken();
    localStorage.removeItem("fsddffd");
  };

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
    isLogout,
    setIsLogout,
    setAgents,
    planning,setPlanning
  };
  return (
    <dataContexte.Provider value={value}>{children}</dataContexte.Provider>
  );
}
