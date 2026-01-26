import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import AddClimbform from "./features/climbs/components/AddClimbForm" 
import ClimbList from "./features/climbs/components/ClimbList"
import './App.css'
import { loadClimbs, saveClimbs } from './features/climbs/climbsStorage'
import Filters from './features/climbs/components/Filters'

Modal.setAppElement('#root')

function App() {
  const [climbs, setClimbs] = useState(() => loadClimbs())
  const [filters,setFilters ] = useState({grade:"", result:""})
  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  useEffect(()=>{
    saveClimbs(climbs)
  },[climbs])

  function addClimb(climb){
    setClimbs(prevClimb => [...prevClimb, climb] )
  }

  const deleteClimb =(id)=> {
    setClimbs(prev => prev.filter(climb => climb.id !== id))
  }

  const updateClimb =(id, patch)=> {
    setClimbs(prev => 
      prev.map(climb =>
        climb.id === id
        ? {...climb, ...patch}
        : climb
      )
    )
  }


  return (
    <>
      <div className="AddClimbForm">
        <button onClick={openModal}>Add Form</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >

          <AddClimbform closeModal={closeModal} onAdd={addClimb}/>
        </Modal>
      </div>
      <Filters 
        filters={filters} setFilters={setFilters}
      />
      {climbs.length === 0 ? (
        <p>No Climbs yet</p>
      ):(
        <div className='ClimbList'>
          <ClimbList climbs={climbs} filters={filters} onUpdateClimb={updateClimb} onDeleteClimb={deleteClimb}/>
        </div>
        )
      }
    </>
  )
}

export default App
