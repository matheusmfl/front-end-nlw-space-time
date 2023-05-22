import Image from 'next/image'
import logo from '../../assets/logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={logo} alt="" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-50">
          Sua capsula do tempo
        </h1>
        <p className="mt-1 text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        href=""
        className="inline-block uppercase rounded-full 
    bg-green-500 px-5 py-3 font-alt text-sm leading-none text-black hover:bg-green-600"
      >
        Cadastrar lembranças
      </a>
    </div>
  )
}
