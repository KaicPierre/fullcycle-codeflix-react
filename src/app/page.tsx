import { Inter } from 'next/font/google'
import Image from 'next/image'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-b from-transparent to-black">
      <Header></Header>
      <main className="relative pb-24 pl-4  lg:pl-16">
        <div className="spave-y-2 flex flex-col py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black">
            <Image
              src="/banner.png"
              alt="Maid"
              fill={true}
              className="h-[65vh] object-cover object-top lg:h-[95vh]"
            ></Image>
          </div>
          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">Maid</h1>

          <p className="text-shadow-md masx-w-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            After fleeing an abusive relationship, a young mother finds a job
            cleaning houses as she fights to provide for her child and build
            them a better future. Watch all you want. Margaret Qualley stars
            alongside real-life mom Andie MacDowell in this powerful drama
            inspired by the bestselling memoir.
          </p>
        </div>
        <div className="flex space-x-4">
          <button className=" intems-center cursor-pointer gap-x-2 rounded bg-white px-5 py-1.5 font-semibold text-black hover:opacity-75 md:px-8 md:py-2.5 md:text-xl">
            Play
          </button>
          <button className=" intems-center cursor-pointer gap-x-2 rounded bg-gray-600 px-5 py-1.5 font-semibold text-white hover:opacity-75 md:px-8 md:py-2.5 md:text-xl">
            More info
          </button>
        </div>
      </main>
    </div>
  )
}
