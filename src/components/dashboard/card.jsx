import { useMappedAgent } from "../../hooks/useMappedAgent";

export default function Card() {
    const agent = useMappedAgent()

  return <>
  
  <div className="bg-white rounded-lg shadow-md p-10 text-center">
      <h2 className="text-lg font-bold mb-2">{agent.nom}</h2>
      <p className="text-gray-700 mb-4">{agent.prenom}</p>
      <p className="text-gray-700 mb-4">{agent.libelle_fonction}</p>
      <p className="text-gray-700 mb-4">{agent.libelle_direction}</p>
    </div>
    </>;
}
