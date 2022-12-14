import Image from 'next/image'
import { Main } from '../../styles/layout'

export const Header = () => {
  return (
    <Main>
      <Image style={{ marginLeft: '0.5rem' }} unoptimized={true} priority={true} src={'/banner.png'} width={820} height={240} alt="alt text" />
    </Main>
  )
}
