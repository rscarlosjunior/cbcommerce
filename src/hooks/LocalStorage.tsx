import { useCallback, useEffect, useState } from "react"

function useLocalStorageLite<T>(key: string) {
    const [state, setState] = useState<T | null>(() => {
        const exValue = localStorage.getItem(key)
        if (exValue) {
            return JSON.parse(exValue) as T
        }
        return null
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    const storageWatcher = useCallback(
        (e: StorageEvent) => {
            if (e.newValue) {
                setState((currState) => {
                    const newDat = JSON.parse(e.newValue || "null")
                    return newDat === state ? newDat : currState
                })
            }
        },
        [state]
    )

    useEffect(() => {
        window.addEventListener("storage", storageWatcher)
        return () => {
            window.removeEventListener("storage", storageWatcher)
        }
    }, [state, storageWatcher])

    return { state, setState }
}

export default useLocalStorageLite;
