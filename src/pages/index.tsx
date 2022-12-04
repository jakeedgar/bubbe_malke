import Card from '../common/components/Card/Card'
import CustomInput from '../common/components/Input/Input'
import { paragraphOne, paragraphTwo, paragraphThree } from '../common/constants/story'
import { Main } from '../styles/layout'

export default function Home() {
  return (
    <Main>
      <CustomInput />
      <Card title="Chapter 1">{paragraphOne}</Card>
      <br />
    </Main>
  )
}
