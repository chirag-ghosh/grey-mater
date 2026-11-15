import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Header from '../components/header'
import Navbar from '../components/Navbar'
import { biodata } from '../basicData'
import '../styles/app.scss'
import 'prismjs/themes/prism-okaidia.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chiragghosh.dev'),
  title: 'Chirag Ghosh',
  description: biodata.tagline,
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    url: 'https://www.chiragghosh.dev/',
    title: 'Chirag Ghosh',
    description: biodata.tagline,
    images: ['/metatag.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chirag Ghosh',
    description: biodata.tagline,
    images: ['/metatag.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}
          <Navbar />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
