import AcceptedLeave from "../components/accepted leave/acceptedLeave";
import AgentOnLeave from "../components/agent on leave/agentOnleave";
import Dashboard from "../components/dashboard/dashboard";
import { useData } from "../hooks/useData";
import AllAgents from "../components/add agents/allAgents";
import LeaveRequest from "../components/Leave request/leaveRequest";
import AllAgent from "../components/all agent/allAgent";

export default function DashboardPage() {
  const { showAllAgents, showLeaveRequest, showAcceptedRequest,showAgents } =
    useData();
  return (
    <>
      <Dashboard>
        {showAllAgents && <AllAgents />}
        {showLeaveRequest && <LeaveRequest />}
        {showAcceptedRequest && <AcceptedLeave />}
        {showAgents && <AllAgent />}
      </Dashboard>
    </>
  );
}
