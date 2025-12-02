import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'
import I18nProvider from './i18n-provider'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6753416185343224"
          crossOrigin="anonymous"
        />
        <Script
          type="module"
          id="bubble-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              import BubbleChat from 'https://agent-factory-chat.hostgator.io/scripts/start-chat.js';
              const hashId = '5ccb6143-9677-458b-b326-0284f253bd67';
              const bubbleChat = new BubbleChat(hashId, 'prod');
              bubbleChat.open();
            `
          }}
        />
      </body>
    </html>
  )
}
