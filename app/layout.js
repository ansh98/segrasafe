import './globals.css'

export const metadata = {
  title: 'Segrasafe – Biomedical Waste Management',
  description: 'Safe, compliant, and eco-friendly biomedical waste collection, transport, and disposal for healthcare providers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
