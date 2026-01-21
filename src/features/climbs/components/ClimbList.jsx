export default function ClimbList({climbs}){
    console.log(climbs)

    const climbElement = climbs.map(climb =>{
        return <div key={climb.id}>
            <h1>{climb.grade}</h1>
            <p>{climb.result}</p>
            <p>{climb.note}</p>
            <p>{climb.date}</p>
            </div>
    })
    return(
        <div>{climbElement}</div>

    ) 
}