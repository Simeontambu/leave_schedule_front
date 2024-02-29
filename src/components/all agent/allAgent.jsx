import { useData } from "../../hooks/useData";
import Card from "../dashboard/card";
import { mappesAgentContext } from "../../hooks/useMappedAgent";

export default function AllAgent() {
  const { agents, searchText } = useData();
  return (
    <>
      <div className="overflow-y-scroll h-[31.25em] my-[5em]">
        <div className="flex justify-center flex-wrap gap-4 ">
          {agents
            .filter((agent) =>
              agent.nom.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((agent) => (
              <div key={agent.id} className="min-w-64">
                <mappesAgentContext.Provider value={agent}>
                  <Card />
                </mappesAgentContext.Provider>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
