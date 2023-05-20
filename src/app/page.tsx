import { User } from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="bg-[url(../assets/bg-stars.svg)] bg-cover grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className=" relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10">
        {/* blur */}
        <div
          className="absolute right-0 top-1/2 h-[288px] blur-full
        w-[526px] -translate-y-1/2 rounded-full translate-x-1/2 bg-purple-700 opacity-50"
        ></div>
        {/* Stripes */}
        <div className="absolute right-2  top-0 bottom-0 w-2 bg-stripes" />

        {/* Sign In */}
        <a
          href=""
          className="flex hover:text-gray-50 transition-colors items-center gap-3 text-left"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="text-sm leading-snug max-w-[140px]">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={logo} alt="" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-50">
              Sua capsula do tempo
            </h1>
            <p>
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>

            <a href="" className="block uppercase pt-5">
              Cadastrar lembranças
            </a>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança. comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              {' '}
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
