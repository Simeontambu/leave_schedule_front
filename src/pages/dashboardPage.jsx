import Dashboard from "../components/dashboard/dashboard";
import { useData } from "../hooks/useData";
import AllAgents from "./allAgents";
import LeaveRequest from "./leaveRequest";

export default function DashboardPage(){
    const {showAllAgents,showLeaveRequest}= useData()
    console.log(showAllAgents)
    return(
        <>
        <Dashboard>
        {showAllAgents &&  <AllAgents/>}
        {showLeaveRequest &&  <LeaveRequest/>}
        </Dashboard>
        </>
    )
}