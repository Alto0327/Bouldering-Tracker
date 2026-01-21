export default function ClimbItem({climb}){
    return (
        <div>
            <h2>{climb.grade}</h2>
            <p>{climb.result}</p>
            <p>{climb.note}</p>
        </div>
    )
}