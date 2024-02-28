import { useData } from "../../hooks/useData";
import Header from "./header";
import Navbar from "./navBar";

export default function Dashboard({ children }) {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className=" flex-1 ">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
