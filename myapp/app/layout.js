import Navbar from '@/components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Donut Shop',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-w-screen-xl m-auto'>
        <Navbar />
        {children}
        
        </body>
    </html>
  )
}
