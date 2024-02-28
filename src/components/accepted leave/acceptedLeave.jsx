import { useData } from "../../hooks/useData";

export default function AcceptedLeave() {
  const { planning } = useData();
  return (
    <>
      <table className="table-auto w-[50.25em] bg-[#9dc3cc] my-auto mx-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 ">Code congé</th>
            <th className="px-4 py-2">Nom agent</th>
            <th className="px-4 py-2">Date départ</th>
            <th className="px-4 py-2">Date retour</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {planning.map((plannings) => (
            <tr key={plannings.id}>
              <td className="px-4 py-2 border border-r-gray-400">
                {plannings.code_conge}
              </td>
              <td className="px-4 py-2 border border-r-gray-400">
                {plannings.matricule_agent}
              </td>
              <td className="px-4 py-2 border border-r-gray-400">
                {plannings.date_depart}
              </td>
              <td className="px-4 py-2 border border-r-gray-400">
                {plannings.date_retour}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
