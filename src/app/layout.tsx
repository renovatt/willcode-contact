import './globals.css'
import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'
import { ToastifyProvider } from './components/ToastifyProvider'
import { Container } from './components/Container'

const chakra_Petch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <body className={chakra_Petch.className}>
        <ToastifyProvider>
          <Container>
            {children}
          </Container>
        </ToastifyProvider>
      </body>
    </html>
  )
}
