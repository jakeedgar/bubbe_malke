import { useState, useEffect, Dispatch, SetStateAction } from 'react'

// Custom hook for localStorage operations
const useLocalStorage = <T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] => {
  // Function to safely parse JSON from localStorage
  const safelyParseJSON = (str: string | null): T | null => {
    try {
      return str ? JSON.parse(str) : null
    } catch (error) {
      console.error(`Error parsing JSON from localStorage: ${error}`)
      return null
    }
  }

  // Check if localStorage is available
  const isLocalStorageAvailable = typeof localStorage !== 'undefined'

  // Get the initial value from localStorage if it exists and localStorage is available
  const storedValue = isLocalStorageAvailable ? localStorage.getItem(key) : null
  const initial = safelyParseJSON(storedValue) || initialValue

  // Create a state to store the current value
  const [value, setValue] = useState<T>(initial)

  // Update localStorage when the value changes
  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.setItem(key, JSON.stringify(value))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLocalStorageAvailable])

  // Function to update the value in state and localStorage
  const updateValue = (newValue: SetStateAction<T>) => {
    setValue((prevValue) => {
      // Support functional updates
      const updatedValue = typeof newValue === 'function' ? (newValue as (prevState: T) => T)(prevValue) : newValue
      return updatedValue
    })
  }

  return [value, updateValue]
}

export default useLocalStorage
