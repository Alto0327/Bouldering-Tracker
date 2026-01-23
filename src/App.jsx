import { useEffect, useState } from 'react'
import AddClimbform from "./features/climbs/components/AddClimbForm" 
import ClimbList from "./features/climbs/components/ClimbList"
import './App.css'
import { loadClimbs, saveClimbs } from './features/climbs/climbsStorage'
import Filters from './features/climbs/components/Filters'

function App() {
  const [climbs, setClimbs] = useState(() => loadClimbs())
  const [filters,setFilters ] = useState({grade:"", result:""})

  useEffect(()=>{
    saveClimbs(climbs)
  },[climbs])

  function addClimb(climb){
    setClimbs(prevClimb => [...prevClimb, climb] )
  }

  const deleteClimb =(id)=> {
    setClimbs(prev => prev.filter(climb => climb.id !== id))
  }


  return (
    <>
      <div className="AddClimbForm">
        <AddClimbform onAdd={addClimb}/>
      </div>
      <Filters 
        filters={filters} setFilters={setFilters}
      />
      {climbs.length === 0 ? (
        <p>No Climbs yet</p>
      ):(
        <div className='ClimbList'>
          <ClimbList climbs={climbs} filters={filters} onDeleteClimb={deleteClimb}/>
        </div>
        )
      }
    </>
  )
}

export default App
