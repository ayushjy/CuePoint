import Mainlayout from '@/src/components/mainlayout/main-layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Mainlayout>
    <Component {...pageProps} />
    </Mainlayout>
    </>
  )
}
