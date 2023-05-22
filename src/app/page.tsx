import { cookies } from 'next/headers'

import { Copyright } from './components/Copyright'
import { SignIn } from './components/SignIn'
import { Hero } from './components/Hero'
import { EmptyMemories } from './components/EmptyMemories'
import { Profile } from './components/Profile'

export default function Home() {
  // esse método HAS retorna true ou false, se tiver um cookie chamado TOKEN, ele retora TRUE
  const isAuthenticate = cookies().has('token')
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
        {isAuthenticate ? <Profile /> : <SignIn />}

        {/* Hero */}
        <Hero />
        {/* Copyright */}
        <Copyright />
      </div>

      {/* Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  )
}
