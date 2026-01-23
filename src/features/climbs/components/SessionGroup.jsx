import ClimbItem from "./ClimbItem"

export default function SessionGroup({session, onDeleteClimb}){
    function parseLocalDate(ymd) {
        const [y, m, d] = ymd.split("-").map(Number)
        return new Date(y, m - 1, d)
    }

    function formatDate(isoDate) {
        return parseLocalDate(isoDate).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
        })
    }
    
    return(
        <section className="session-group">
            <h1 className="session-group__Date">{formatDate(session.date)}</h1>
            {session.climbs.map(climb =>
                <ClimbItem key={climb.id} climb={climb} onDeleteClimb={onDeleteClimb}/>
            )}
        </section>
    )
}