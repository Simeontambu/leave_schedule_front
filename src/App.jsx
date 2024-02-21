import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginUser from "./pages/loginUser";
import Register from "./components/authentication/register";
import DashboardPage from "./pages/dashboardPage";
import { useData } from "./hooks/useData";

function App() {
  const { isAuthenticated } = useData();
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<LoginUser />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <DashboardPage /> : <Navigate to="/" replace />
              }
            />
            {/* <Route path="/dashboard/agents" element={<AllAgents/>} /> */}
          </Routes>
        
      </Router>
    </>
  );
}
export default App;
