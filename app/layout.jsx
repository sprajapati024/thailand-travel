import './globals.css'

export const metadata = {
  title: 'Thailand Adventure 2026 | Shirin & Zeel',
  description: 'A 14-day journey through the Land of Smiles',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 to-emerald-50">{children}</body>
    </html>
  )
}
