import { useState } from "react"

export default function AddClimbForm({onAdd , closeModal}){
    const today = new Date().toLocaleDateString("en-CA") 

    const [grade, setGrade]= useState("")
    const [result, setResult]= useState("send")
    const [note, setNote]= useState("")
    const [date,setDate] = useState(today)
    


    function handleSubmit(e) {
        e.preventDefault()
        
        
        onAdd({
            id: Date.now().toString(),
            date,
            grade,
            result,
            note,
        })
        setDate(today)
        setGrade("")
        setResult("send")
        setNote("")
        closeModal()
    }
    
    return(
        <form onSubmit={handleSubmit} className="climb-form">
            <div className="climb-form__header">
                <h2>Add New Project</h2>
                <button type="button" onClick={closeModal}>X</button>
            </div>
            <div className="climb-form__fields">
                <label>Grade:
                    <select type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required >
                        <option value="" disabled>Select grade</option>
                        <option value="G0-G1">G0-G1</option>
                        <option value="G2-G3">G2-G3</option>
                        <option value="G4-G5">G4-G5</option>
                        <option value="G6-G7">G6-G7</option>
                        <option value="G8+">G8+</option>
                    </select>   
                </label>
                <label>date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </label>
                <label>Result:
                    <select name="result" id="result" value={result} onChange={(e)=> setResult(e.target.value)} >
                        <option value="flash">Flash</option>
                        <option value="send">Send</option>
                        <option value="attempt">Attempt</option>
                        <option value="fail">Fail</option>
                    </select>
                </label>
                <label>Notes
                    <textarea type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="About Climb"/>
                </label>
            </div>
            <div className="climb-form__actions">
                <button type="submit" >Save</button>
                <button type="button" onClick={closeModal}>Cancel</button>
            </div>
        </form>
    ) 
        
}