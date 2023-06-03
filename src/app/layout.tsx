import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB',
  description: 'IMDB Clone :D',
  viewport: "width=device-width, initial-scale=1",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
