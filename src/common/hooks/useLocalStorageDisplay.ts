import { useState, useEffect } from 'react'

// Define an interface for the localStorage data
interface LocalStorageData {
  [key: string]: string | null
}

// Custom hook to get and display all data from localStorage
const useLocalStorageDisplay = () => {
  const [localStorageData, setLocalStorageData] = useState<LocalStorageData>({})

  useEffect(() => {
    const data: LocalStorageData = {}

    // Iterate over the keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key !== null) {
        const value = localStorage.getItem(key)
        data[key] = value
      }
    }

    // Update the state with the localStorage data
    setLocalStorageData(data)
  }, [])

  return localStorageData
}

export default useLocalStorageDisplay
