const STORAGE_KEY ="Dev_Sample_V1"

export function loadClimbs(){
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

export function saveClimbs(climbs){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(climbs))
}