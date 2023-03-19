import './globals.css'

export const metadata = {
  title: 'Quokka',
  description: 'Quokka Ventures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
