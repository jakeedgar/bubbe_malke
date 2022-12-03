import '../styles/globals.css'
import Card from '../common/components/Card/Card'
import { paragraphOne, paragraphTwo, paragraphThree } from '../common/constants/story'
import { Main } from '../styles/layout'

export default function Home() {
  return (
    <Main>
      <Card title="Chapter 1">{paragraphOne}</Card>
      <br />
    </Main>
  )
}
