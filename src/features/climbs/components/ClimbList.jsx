import {sessionClimbs} from "../climbsUtils"
import SessionGroup from "./SessionGroup"

export default function ClimbList({climbs}){

    const sessions = sessionClimbs(climbs)
    return(
        <>
            <SessionGroup sessions={sessions} />
        </>
        
    ) 
}