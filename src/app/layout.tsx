import { Header } from './header'
import RootStyleRegistry from './RootStyleRegistry'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>The Death of Bubbe Malke</title>
      </head>
      <body>
        <Header />
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  )
}
