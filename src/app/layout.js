import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfólio - Nathan Heinzmann',
  description: 'Portfólio de Nathan Heinzmann, desenvolvedor Front-end. Veja meus projetos e entre em contato.',
  image: '/images/og-image.png',
  url: 'https://nathanheinzmann.com',
  type: 'website',
  keywords: ['portfolio', 'nathan heinzmann', 'front-end', 'developer'],
  openGraph: {
    title: 'Portfólio - Nathan Heinzmann',
    description: 'Portfólio de Nathan Heinzmann, desenvolvedor Front-end. Veja meus projetos e entre em contato.',
    image: '/images/og-image.png',
    url: 'https://nathanheinzmann.com',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
