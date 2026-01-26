import { useState } from "react"

export default function ClimbItem({climb , onDeleteClimb , onUpdateClimb}){
    const [isEditing, setIsEditing] = useState(false)
    const [draftNote, setDraftNote]= useState("")
    const [draftGrade, setDraftGrade]= useState("")
    const [draftResult, setDraftResult]= useState("")

    function handleCancel(){setIsEditing(false)}

    function handleEdit(){
        setIsEditing(true)
        setDraftNote(climb.note ?? "")
        setDraftGrade(climb.grade)
        setDraftResult(climb.result)
    }

    return (
        <>

            {isEditing === true ?
                <div>
                    <select type="text" value={draftGrade} onChange={(e) => setDraftGrade(e.target.value)} required>
                        <option value="G0-G1">G0-G1</option>
                        <option value="G2-G3">G2-G3</option>
                        <option value="G4-G5">G4-G5</option>
                        <option value="G6-G7">G6-G7</option>
                        <option value="G8+">G8+</option>
                    </select>   
                    <select name="result" id="result" value={draftResult} onChange={(e)=> setDraftResult(e.target.value)} >
                        <option value="flash">Flash</option>
                        <option value="send">Send</option>
                        <option value="attempt">Attempt</option>
                        <option value="fail">Fail</option>
                    </select>
                    <input type="text" value={draftNote} onChange={(e) => setDraftNote(e.target.value)}/>                    
                    <button onClick={() => {
                                onUpdateClimb(climb.id,{
                                    grade:draftGrade,
                                    result:draftResult,
                                    note:draftNote
                                })
                                setIsEditing(false)
                            }}
                    >
                        Save
                    </button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            : 
            <div>
                    <h2>{climb.grade}</h2>
                    <p>{climb.result}</p>
                    <p>{climb.note}</p>
                    <button onClick={()=> onDeleteClimb(climb.id)}>Delete</button>
                    <button onClick={()=> handleEdit()}>Edit Climb</button>
                </div>
            }
        </>
    )
}