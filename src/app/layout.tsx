import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {ReactNode} from "react"
import {Footer} from "@/components/Footer"
import {Header} from "@/components/Header"
import {HeaderNav} from "@/components/HeaderNav"
import {HeaderLink} from "@/components/HeaderLink"
import {LogoutButton} from "@/components/Buttons/LogoutButton"
import {AuthProvider} from "@/components/Auth/AuthProvider";
import {LoggedInWrapper} from "@/components/Auth/LoggedInWrapper";
import {getLoggedInUser} from "@/lib/server/appwrite";
import {LoggedOutWrapper} from "@/components/Auth/LoggedOutWrapper";

const inter = Inter({subsets: ["latin"], weight: ['400', '700']})

export const metadata: Metadata = {
  title: "Appwrite / NextJS demo",
  description: "Demo todolist app with NextJS and Appwrite",
}
/**
 * Default layout for entire app.
 * Notes:
 *   During SSR, we check if we have a user logged in, then pass that down to the CSR Auth Provider.
 *   This means we have a nice easy way to access the logged in user during Client rendering.
 *   The LoggedInWrapper components are client-side and use the Auth Context to show/hide content.
 */

export default async function RootLayout({children}: { children: ReactNode }) {
  const user = await getLoggedInUser()

  return (
    <html lang="en">
    <body className={inter.className}>
      <AuthProvider user={user}>
        <Header>
          <HeaderNav>
            <LoggedInWrapper>
            <HeaderLink href={'/dashboard'} text={'Dashboard'}/>
            </LoggedInWrapper>
          </HeaderNav>
          <HeaderNav>
            <LoggedOutWrapper>
              <HeaderLink href={'/register'} text={'Sign up'}/>
              <HeaderLink href={'/login'} text={'Login'}/>
            </LoggedOutWrapper>
            <LoggedInWrapper>
              <LogoutButton/>
              <HeaderLink href={'/profile'} text={'Profile'}/>
            </LoggedInWrapper>
          </HeaderNav>
        </Header>

        {children}
        <Footer items={[
          {href: 'https://appwrite.io', text: 'Appwrite'},
          {href: 'https://vercel.app', text: 'Vercel'},
          {href: 'https://github.com', text: 'Github'},
          {href: 'https://threads.net', text: 'Threads'},
        ]}/>
      </AuthProvider>
    </body>
    </html>
  )
}
