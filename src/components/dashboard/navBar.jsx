import { Link } from "react-router-dom";
import { RiPassValidFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { CiSquareQuestion } from "react-icons/ci";
import { FaCalendarMinus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useData } from "../../hooks/useData";
export default function Navbar() {
  const navigate = useNavigate();
  const { setShowAllAgents, setshowLeaveRequest } = useData();

  return (
    <>
      <nav className="bg-[#9dc3cc] w-64 min-h-screen sticky">
        <h1 className="text-center font-bold text-3xl border-b-2 border-blue-200 pt-3 mb-6 pb-2">
          Dashboard
        </h1>
        <ul className="flex flex-col items-center gap-5">
          <div className="border-b-2">
            <Link
              onClick={() => {
                setShowAllAgents(false);
                setshowLeaveRequest(true);

                navigate("/dashboard", { replace: true }); // Force le remplacement de l'historique
              }}
              className="flex items-center gap-2 hover:bg-blue-200 rounded-lg p-2 "
            >
              <CiSquareQuestion size={60} />
              <li className="text-xl">Leave request</li>
            </Link>
          </div>
          <div className="border-b-2">
            <Link
              to=""
              onClick={() => {
                setshowLeaveRequest(false);
                setShowAllAgents(true);

                navigate("/dashboard", { replace: true }); // Force le remplacement de l'historique
              }}
              className="flex items-center gap-2 hover:bg-blue-200 rounded-lg p-2"
            >
              <FaUsers size={60} />
              <li className="text-xl pr-[1.8em]">All agents</li>
            </Link>
          </div>
          <div className="border-b-2">
            <Link className="flex items-center gap-2 hover:bg-blue-200 rounded-lg p-2">
              <FaCalendarMinus size={60} />
              <li className="text-xl">Agent on leave</li>
            </Link>
          </div>
          <div className="border-b-2">
            <Link className="flex items-center gap-2 hover:bg-blue-200 rounded-lg p-2">
              <RiPassValidFill size={60} />
              <li className="text-xl">Accepted leave</li>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
}
