import Image from 'next/image'
import styles from '../styles/layout.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Image src={'/banner.png'} width={1000} height={240} alt="alt text" />
      </nav>
    </header>
  )
}
