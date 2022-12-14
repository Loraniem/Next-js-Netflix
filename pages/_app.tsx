import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hook/useAuth'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <RecoilRoot>
      {/* Higher Oder Component */}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  )
}

export default MyApp
