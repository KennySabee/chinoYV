// app/layout.jsx
import './globals.css'

export const metadata = {
  title: 'Club Chino YV',
  description: 'Academia de Chino Mandarin ubicada en el valle de los chillos, contamos con cursos online y presenciales de Chino.',
  icons: {
    icon: '/navLogo.ico', // ruta desde /public
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
