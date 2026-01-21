export default function Filters({filters, setFilters}){
    const hasActiveFilter = filters.grade !== "" || filters.result !== ""

    function clearFilters() {
        setFilters({ grade: "", result: "" })
    }
    
    return(
        <div>
            <select
                value={filters.grade}
                onChange={(e) =>
                    setFilters(prev => ({ ...prev, grade: e.target.value }))
            }>
                <option value="" disabled>Select grade</option>
                <option value="G0-G1">G0-G1</option>
                <option value="G2-G3">G2-G3</option>
                <option value="G4-G5">G4-G5</option>
                <option value="G6-G7">G6-G7</option>
                <option value="G8+">G8+</option>
            </select>  
                <select
                    value={filters.result}
                    onChange={(e) =>
                        setFilters(prev => ({ ...prev, result: e.target.value }))
                }>
                    <option value="" disabled >Result</option>
                    <option value="flash">Flash</option>
                    <option value="send">Send</option>
                    <option value="attempt">Attempt</option>
                    <option value="fail">Fail</option>
                </select>
                {hasActiveFilter ? (
                    <button type="button" onClick={clearFilters}>
                        Clear filters
                    </button>
                ) : null}
        </div>
    )
}