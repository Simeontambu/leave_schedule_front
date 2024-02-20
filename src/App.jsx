import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUser from "./pages/loginUser";
import Register from "./components/authentication/register";


function App() {
  return (
    <>
      <Router>
       
          <Routes>
            <Route path="/" element={<LoginUser />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
       
      </Router>
    </>
  );
}

export default App;
