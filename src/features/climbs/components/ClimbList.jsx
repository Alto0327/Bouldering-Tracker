import {sessionClimbs, filterClimbs} from "../climbsUtils"
import SessionGroup from "./SessionGroup"

export default function ClimbList({climbs, filters, onDeleteClimb}){
    const filteredClimbs = filterClimbs(climbs, filters)
    const sessions = sessionClimbs(filteredClimbs)


    const sessionsElement = sessions.map(session =>(
        <SessionGroup key={session.date} session={session} onDeleteClimb={onDeleteClimb}/>
    ))

    return(
        <>
            {sessionsElement}
        </>
        
    ) 
}