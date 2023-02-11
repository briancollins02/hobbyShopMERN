import '@/styles/globals.css'
//import next font to render local fonts.
import localFontOne from '@next/font/local'
import type { AppProps } from 'next/app'
//load in the GloomyThings font.
const fontMain = localFontOne({
  src: "../public/GloomyThings.ttf"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className = {fontMain.className}>
      <Component {...pageProps} />
    </div>
  )
}
