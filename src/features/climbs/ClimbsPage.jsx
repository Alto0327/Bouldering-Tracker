import { useEffect, useState } from "react"
import Modal from "react-modal"

import AddClimbForm from "./components/AddClimbForm"
import ClimbList from "./components/ClimbList"
import ClimbsHeader from "./components/ClimbsHeader"

import { loadClimbs, saveClimbs } from "./climbsStorage"

Modal.setAppElement("#root")

export default function ClimbsPage() {
  const [climbs, setClimbs] = useState(() => loadClimbs())
  const [filters, setFilters] = useState({ grade: "", result: "" })
  const [modalIsOpen, setIsOpen] = useState(false)

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
    <div className="climbs-page">
      <ClimbsHeader onOpenAdd={openModal} filters={filters} setFilters={setFilters} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Climb"
      >
        <AddClimbForm onAdd={addClimb} closeModal={closeModal} />
      </Modal>

      {climbs.length === 0 ? (
        <p className="climbs-page__empty">No Climbs yet</p>
      ) : (
        <div className="climbs-page__list">
          <ClimbList
            climbs={climbs}
            filters={filters}
            onUpdateClimb={updateClimb}
            onDeleteClimb={deleteClimb}
          />
        </div>
      )}
    </div>
  )
}
