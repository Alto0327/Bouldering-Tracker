import { useState } from 'react'
import AddClimbform from "./features/climbs/components/AddClimbForm" 
import ClimbList from "./features/climbs/components/ClimbList"
import './App.css'

function App() {
  const [climbs, setClimbs] = useState([{id:"1", grade:"v2", result:"send"}, {id:"2",grade:"v2", result:"flash"}])

  function addClimb(climb){
    setClimbs(prevClimb => [...prevClimb, climb] )
  }

  return (
    <>
      <div className="AddClimbForm">
        <AddClimbform onAdd={addClimb}/>
      </div>
      <div className='ClimbList'>
        <ClimbList climbs={climbs}/>
      </div>
    </>
  )
}

export default App
