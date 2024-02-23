import { IoIosNotificationsOutline } from "react-icons/io";
import User from "./user";
import { useData } from "../../hooks/useData";

export default function Header() {
  const { searchText, setSearchText, showAgents, planningData, userData } =
    useData();
  const admin = userData.name === "admin";
  return (
    <>
      <div className="bg-[#9dc3cc] border-b-2 border-blue-200 pt-3 mb-6 pb-2 flex justify-between">
        <div className="flex">
          <IoIosNotificationsOutline size={35} className="ml-20 " />
          {admin ? (
            <span class=" bg-red-500 rounded-full p-1 text-1xs text-white">
              {planningData.length}
            </span>
          ) : (
            ""
          )}
        </div>
        {showAgents && (
          <input
            type="text"
            placeholder="Search agents by name..."
            className="border-0 rounded outline-none"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        )}
        <User />
      </div>
    </>
  );
}
