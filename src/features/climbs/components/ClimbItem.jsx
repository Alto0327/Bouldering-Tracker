import { useState } from "react"

export default function ClimbItem({climb , onDeleteClimb , onUpdateClimb}){
    const [isEditing, setIsEditing] = useState(false)
    const [draftNote, setDraftNote]= useState("")
    const [draftGrade, setDraftGrade]= useState("")
    const [draftResult, setDraftResult]= useState("")
    const [draftDate, setDraftDate] =useState("")

    function handleCancel(){setIsEditing(false)}

    function handleEdit(){
        setIsEditing(true)
        setDraftNote(climb.note ?? "")
        setDraftGrade(climb.grade)
        setDraftResult(climb.result)
        setDraftDate(climb.date)
    }

    return (
        <div className="climb-item"> 
            {isEditing === true ?
                <div className="climb-item__container editing-container">
                    <div className="climb-item__fields"></div>
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
                    <input type="date" value={draftDate} onChange={(e) => setDraftDate(e.target.value)}/>
                    <div className="climb-item__actions">
                        <button onClick={() => {
                            onUpdateClimb(climb.id,{
                                grade:draftGrade,
                                result:draftResult,
                                note:draftNote,
                                date:draftDate
                            })
                            setIsEditing(false)
                        }}
                        >
                            Save
                        </button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            : 
                <div className="climb-item__container">
                    <h2 className="climb-item__grade">{climb.grade}</h2>
                    <p className="climb-item__result">{climb.result}</p>
                    <p className="climb-item__note">{climb.note}</p>
                    <div className="climb-item__btnContainer">
                        <button className="climb-item__Btn" onClick={()=> onDeleteClimb(climb.id)}>Delete</button>
                        <button className="climb-item__Btn" onClick={()=> handleEdit()}>Edit Climb</button>
                    </div>
                </div>
            }
        </div>
    )
}