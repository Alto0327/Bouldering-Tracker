import ClimbItem from "./ClimbItem"

export default function SessionGroup({sessions}){
    function formatDate(isoDate) {
        return new Date(isoDate).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
        })
    }
    
    const sessionElement = sessions.map(session =>(
        <div key={session.date}>
            <h1>{formatDate(session.date)} Session</h1>
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