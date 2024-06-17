import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import {FooterLink} from "@/components/FooterLink";
import {ReactNode} from "react";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";

const comicNeue = Comic_Neue({ subsets: ["latin"], weight: ['400', '700']});

export const metadata: Metadata = {
  title: "Appwrite / NextJS demo",
  description: "Demo todolist app with NextJS and Appwrite",
};

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className={comicNeue.className}>
      <Header leftItems={[
        {href: '/dashboard', text: 'Dashboard'},
        {href: '/lists', text: 'Lists'},
      ]}
      rightItems={[
        {href: '/login', text: 'Login'},
        {href: '/logout', text: 'Log out'},
        {href: '/profile', text: 'Profile'},
      ]}/>

      {children}

      <Footer items={[
        {href: 'https://appwrite.io', text: 'Appwrite.io'},
        {href: 'https://vercel.app', text: 'Vercel.app'},
        {href: 'https://github.com', text: 'Github.com'},
      ]}/>
    </body>
    </html>
  );
}
