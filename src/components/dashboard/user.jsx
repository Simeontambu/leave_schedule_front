import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useData } from "../../hooks/useData";
import { Link } from "react-router-dom";
import Alert from "./alert";
export default function User() {
  const { userData, disconnect } = useData();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-2 mr-20">
        <FaRegUserCircle size={35} />
        <h1>{userData.name}</h1>

        <button onClick={disconnect}>
          <Link to="/">
            <LiaSignOutAltSolid size={35} />
          </Link>
        </button>
      </div>
    </>
  );
}
