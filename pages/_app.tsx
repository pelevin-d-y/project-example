import 'normalize.css/normalize.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Modal from 'react-modal'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

Modal.setAppElement('#__next')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  )
}
