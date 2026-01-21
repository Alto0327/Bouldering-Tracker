import { useEffect, useState } from 'react'
import AddClimbform from "./features/climbs/components/AddClimbForm" 
import ClimbList from "./features/climbs/components/ClimbList"
import './App.css'
import { loadClimbs, saveClimbs } from './features/climbs/climbsStorage'

function App() {
  const [climbs, setClimbs] = useState(() => loadClimbs())

  useEffect(()=>{
    saveClimbs(climbs)
  },[climbs])

  function addClimb(climb){
    setClimbs(prevClimb => [...prevClimb, climb] )
  }
  console.log(climbs)

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
