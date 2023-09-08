import { useState, ChangeEvent, useEffect } from 'react'
import { Container, Main } from '../styles/layout'
import useLocalStorage from '../common/hooks/useLocalStorage'

export const Home = () => {
  // Initialize custom input data using the useLocalStorage hook
  const [customData, setCustomData] = useLocalStorage<string>('customData', '')
  const [displayedData, setDisplayedData] = useState<string>('')

  // Define a function to handle changes to the custom input data
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setCustomData(newValue) // Update the custom input data in state and localStorage
  }

  // useEffect to update the displayedData when customData changes
  useEffect(() => {
    setDisplayedData(customData)
  }, [customData])

  return (
    <Container>
      <Main>
        <div>
          <h1>Custom Input Data</h1>
          <input type="text" value={customData} onChange={handleInputChange} placeholder="Enter custom data" />
          <p>Stored in localStorage: {customData}</p>
          <button onSubmit={() => setDisplayedData(customData)}>save</button>
        </div>
        <div>{displayedData}</div>
      </Main>
    </Container>
  )
}

export default Home
