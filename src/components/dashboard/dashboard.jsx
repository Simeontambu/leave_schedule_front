import { useData } from "../../hooks/useData";
import Header from "./header";
import Navbar from "./navBar";

export default function Dashboard({ children }) {
  const { agents } = useData();
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className=" flex-1">
          <Header />
          {/* {children} &&  */}
          <div>
            {agents.map((agent) => (
              <div key={agent.id}>
                <h2>{agent.nom}</h2>
                <p>{agent.prenom}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
