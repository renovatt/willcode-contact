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

const APP_NAME = 'WillCode | Contato';
const APP_DESCRIPTION = 'Entre em contato com WillCode para colaborações, oportunidades ou para trocar ideias. Estou aberto a novos desafios e parcerias. Vamos trabalhar juntos para alcançar resultados incríveis e impulsionar o sucesso dos seus projetos.';

export const metadata: Metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['renovatt', 'renovato', 'Wildemberg', 'Wildemberg Renovato', 'WillCode', 'Página de contato'],
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
  authors: [{ name: 'renovatt' }, { name: 'renovatt', url: 'https://www.linkedin.com/in/renovatt/' }],
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',

  openGraph: {
    type: 'website',
    url: 'https://willcode-contact.vercel.app/',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [{
      url: 'https://willcode-contact.vercel.app/web-1.png',
    }],
  },

  icons: [
    { rel: 'apple-touch-icon', url: '/icon-192x192.png' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
}

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
