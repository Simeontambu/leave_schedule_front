import { createContext, useContext } from "react";
export const mappesAgentContext = createContext()
export function useMappedAgent(){
    const data = useContext(mappesAgentContext)
    return data
}