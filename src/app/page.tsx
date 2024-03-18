import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="relative h-full lg:h-[140vh]">
      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <div className="spave-y-2 flex flex-col py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black"></div>
          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            The Flash
          </h1>

          <p className="text-shadow-md masx-w-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            Após testemunhar o estranho assassinato de sua mãe e a injusta
            acusação de seu pai pelo crime, Barry Allen fica sob os cuidados do
            detetive Joe West e sua filha Iris West. Barry se torna brilhante,
            mas socialmente, um cientista forense desconhecido trabalhando para
            o Departamento de Polícia de Central City.
          </p>
        </div>
        <button className="ms:w-32 w-24 rounded-full bg-white px-4 py-2 font-bold text-black lg:w-40">
          Play
        </button>
        <button className="lg:w w-24 rounded-full bg-gray-700 px-4 py-2 font-bold text-white md:w-32 lg:w-40">
          More info
        </button>
      </main>
    </div>
  )
}
