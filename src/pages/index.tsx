import localFont from 'next/font/local'

import WavFileExtractor from '@/components/wav_file_extractor'

const TTNormsPro = localFont({ src: './TT Norms Pro Regular.otf' })

export default function Home() {
  return (
    <main
      className={
        'flex min-h-screen items-center justify-center overflow-y-scroll bg-primary py-8 ' +
        TTNormsPro.className
      }
    >
      <WavFileExtractor />
    </main>
  )
}
