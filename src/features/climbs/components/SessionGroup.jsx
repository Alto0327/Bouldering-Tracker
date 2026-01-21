import ClimbItem from "./ClimbItem"

export default function SessionGroup({session}){
    function formatDate(isoDate) {
        return new Date(isoDate).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
        })
    }
    
    return(
        <section>
            <h1>{formatDate(session.date)}</h1>
            {session.climbs.map(climb =>
                <ClimbItem key={climb.id} climb={climb} />
            )}
        </section>
    )
}