import { IoIosNotificationsOutline } from "react-icons/io";
import User from "./user";

export default function Header() {
  return (
    <>
      <div className="bg-[#9dc3cc] border-b-2 border-blue-200 pt-3 mb-6 pb-2 flex justify-between">
        <div className="flex">
          <IoIosNotificationsOutline size={35} className="ml-20 " />
          <span class=" bg-red-500 rounded-full p-1 text-1xs text-white">0</span>
        </div>
        <User />
      </div>
    </>
  );
}
