import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

/*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
*/

export const metadata = {
  title: 'Portfólio | Nathan Heinzmann',
  description: 'Portfólio de Nathan Heinzmann, desenvolvedor Front-end. Veja meus projetos e entre em contato.',
  url: 'https://nathanheinzmann.com',
  keywords: ['portfolio', 'nathan heinzmann', 'front-end', 'developer'],
  image: '/images/og-image.png',
  type: 'website',
  openGraph: {
    title: 'Portfólio | Nathan Heinzmann',
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
