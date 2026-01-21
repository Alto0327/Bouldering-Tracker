import {sessionClimbs} from "../climbsUtils"
import SessionGroup from "./SessionGroup"

export default function ClimbList({climbs}){
    const sessions = sessionClimbs(climbs)


    const sessionsElement = sessions.map(session =>(
        <SessionGroup key={session.date} session={session} />
    ))

    return(
        <>
            {sessionsElement}
        </>
        
    ) 
}