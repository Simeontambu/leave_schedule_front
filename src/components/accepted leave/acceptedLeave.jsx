import { useData } from "../../hooks/useData";
import AcceptLeave from "./acceptLeave";

export default function AcceptedLeave() {
  const { planning } = useData();
  return (
    <>
      <AcceptLeave />
      <div className="my-[5em]">
        <table className="table-auto w-[50.25em] bg-[#9dc3cc] my-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 ">Leave the code</th>
              <th className="px-4 py-2">Agent name</th>
              <th className="px-4 py-2">Date of departure</th>
              <th className="px-4 py-2">Return date</th>
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
      </div>
    </>
  );
}
