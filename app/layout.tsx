import Image from 'next/image'
import Link from 'next/link'
import { Header } from './header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>The Death of Bubbe Malke</title>
      </head>
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}
