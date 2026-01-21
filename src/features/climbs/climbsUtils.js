export function filterClimbs(climbs, filters) {
  return climbs.filter((climb) => {
    const gradeOk = !filters.grade || climb.grade === filters.grade
    const resultOk = !filters.result || climb.result === filters.result
    return gradeOk && resultOk
  })
}

export function sessionClimbs(climbs){
    const sorted = [...climbs].sort((a, b) => new Date(b.date) - new Date(a.date))


    const groups ={}
    for(const climb of sorted){
        if (!groups[climb.date]) groups[climb.date] = []
        groups[climb.date].unshift(climb)

    }

    return Object.keys(groups)
        .sort((a,b)=> new Date(b) - new Date(a))
        .map(date => ({date, climbs:groups[date]}))
    
}