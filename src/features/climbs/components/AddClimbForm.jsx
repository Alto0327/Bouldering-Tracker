import { useState } from "react"

export default function AddClimbForm({onAdd}){
    const [grade, setGrade]= useState("")
    const [result, setResult]= useState("send")
    const [note, setNote]= useState("")
    
    function handleSubmit(e) {
        e.preventDefault()
        
        
        onAdd({
            id: Date.now().toString(),
            date:new Date().toISOString().slice(0, 10),
            grade,
            result,
            note,
        })

        setGrade("")
        setResult("send")
        setNote("")
    }
  
    return(
        <form onSubmit={handleSubmit}>
            <label>Grade:
                <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
            </label>
            <label>Result:
                <select name="result" id="result" value={result} onChange={(e)=> setResult(e.target.value)}>
                    <option value="flash">Flash</option>
                    <option value="send">Send</option>
                    <option value="attempt">Attempt</option>
                    <option value="fail">Fail</option>
                </select>
            </label>
            <label>Notes
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Notes about climb"/>
            </label>
            <button type="submit">Save</button>
        </form>
    ) 
        
}