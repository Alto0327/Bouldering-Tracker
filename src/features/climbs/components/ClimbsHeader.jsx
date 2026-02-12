import Filters from "./Filters"

export default function ClimbsHeader({ onOpenAdd, filters, setFilters }) {
  return (
    <header className="climbs-header">
      <div className="climbs-header__top">
        <h1 className="climbs-header__title">Bouldering Tracker</h1>

        <button type="button" className="climbs-header__add-btn" onClick={onOpenAdd}>
          Add Climb
        </button>
      </div>

      <div className="climbs-header__filter">
        <Filters filters={filters} setFilters={setFilters} />
      </div>
    </header>
  )
}
