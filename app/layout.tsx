"use client";

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { usePathname } from 'next/navigation' // Updated import

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname() // Use usePathname instead of useRouter

  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <TransitionGroup>
            <CSSTransition
              key={pathname} // Use pathname for key
              classNames="fade"
              timeout={300}
            >
              {children}
            </CSSTransition>
          </TransitionGroup>
        </main>
        <Footer />
      </body>
    </html>
  )
}