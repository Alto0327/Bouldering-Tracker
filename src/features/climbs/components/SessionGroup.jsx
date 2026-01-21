import ClimbItem from "./ClimbItem"

export default function SessionGroup({sessions}){
    // console.log(sessions)
    const sessionElement = sessions.map(session =>(
        <div key={session.date}>
            <h1>{session.date}</h1>
            {session.climbs.map(climb =>
                <ClimbItem key={climb.id} climb={climb} />
            )}
        </div>
        
    ))
    
    return(
        <>
            {sessionElement}            
        </>
    )
}