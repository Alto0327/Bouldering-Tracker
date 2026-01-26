import {sessionClimbs, filterClimbs} from "../climbsUtils"
import SessionGroup from "./SessionGroup"

export default function ClimbList({climbs, filters, onDeleteClimb,onUpdateClimb}){
    const filteredClimbs = filterClimbs(climbs, filters)
    const sessions = sessionClimbs(filteredClimbs)


    const sessionsElement = sessions.map(session =>(
        <SessionGroup key={session.date} session={session} onUpdateClimb={onUpdateClimb} onDeleteClimb={onDeleteClimb}/>
    ))

    return(
        <>
            {sessionsElement}
        </>
        
    ) 
}