import { FaRegUserCircle } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";
export default function User() {
  return (
    <>
      <div className="flex items-center gap-2 mr-20">
        <FaRegUserCircle size={35} />
        <h1>Admin</h1>
        <LiaSignOutAltSolid size={35}/>
      </div>
    </>
  );
}
