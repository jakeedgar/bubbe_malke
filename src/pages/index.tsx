import { useState, ChangeEvent, useEffect } from 'react'
import { Container, Main } from '../styles/layout'
import useLocalStorage from '../common/hooks/useLocalStorage'
import useLocalStorageDisplay from '../common/hooks/useLocalStorageDisplay'
import { Title } from '../common/components/Typography/Typography'

export const Home = () => {
  const localStorageData = useLocalStorageDisplay()
  const [customData, setCustomData] = useLocalStorage<string>('customData', '')
  const [displayedData, setDisplayedData] = useState<string>('Test')

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
        <Title> This is the data:</Title>
        <ul
          style={{
            color: '#fff',
          }}
        >
          {Object.entries(localStorageData).map(([key, value]) =>
            key !== 'ally-supports-cache' ? (
              <li key={key}>
                <>{key}:</> {value}
              </li>
            ) : null,
          )}
        </ul>
      </Main>
    </Container>
  )
}

export default Home
