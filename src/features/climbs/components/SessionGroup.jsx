import ClimbItem from "./ClimbItem"

export default function SessionGroup({session, onDeleteClimb, onUpdateClimb}){
    function parseLocalDate(ymd) {
        const [y, m, d] = ymd.split("-").map(Number)
        return new Date(y, m - 1, d)
    }

    function formatDate(isoDate) {
        return parseLocalDate(isoDate).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
    }
    
    return(
        <section className="session-group">
            <h1 className="session-group__Date">{formatDate(session.date)}</h1>
            {session.climbs.map(climb =>
                <ClimbItem key={climb.id} climb={climb} onUpdateClimb={onUpdateClimb} onDeleteClimb={onDeleteClimb}/>
            )}
        </section>
    )
}