export default function ClimbItem({climb , onDeleteClimb}){
    return (
        <div>
            <h2>{climb.grade}</h2>
            <p>{climb.result}</p>
            <p>{climb.note}</p>
            <button onClick={()=> onDeleteClimb(climb.id)}>Delete</button>
        </div>
    )
}