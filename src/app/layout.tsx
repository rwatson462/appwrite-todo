import type { Metadata } from "next"
import { Comic_Neue } from "next/font/google"
import "./globals.css"
import {ReactNode} from "react"
import {Footer} from "@/components/Footer"
import {Header} from "@/components/Header"
import {HeaderNav} from "@/components/HeaderNav"
import {HeaderLink} from "@/components/HeaderLink"
import {LogoutButton} from "@/components/Buttonss/LogoutButton"

const comicNeue = Comic_Neue({ subsets: ["latin"], weight: ['400', '700']})

export const metadata: Metadata = {
  title: "Appwrite / NextJS demo",
  description: "Demo todolist app with NextJS and Appwrite",
}

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className={comicNeue.className}>
      <Header>
        <HeaderNav>
          <HeaderLink href={'/dashboard'} text={'Dashboard'}/>
          <HeaderLink href={'/lists'} text={'Lists'}/>
        </HeaderNav>
        <HeaderNav>
          <HeaderLink href={'/login'} text={'Login'}/>
          <LogoutButton />
          <HeaderLink href={'/profile'} text={'Profile'}/>
        </HeaderNav>
      </Header>

      {children}

      <Footer items={[
        {href: 'https://appwrite.io', text: 'Appwrite.io'},
        {href: 'https://vercel.app', text: 'Vercel.app'},
        {href: 'https://github.com', text: 'Github.com'},
      ]}/>
    </body>
    </html>
  )
}
