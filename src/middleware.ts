import { NextRequest, NextResponse } from 'next/server'

const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
// Lembrando que essa signInUrl do Github retorna para nossa aplicação na rota backendNext

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  // prop HTTPONLY dos cookies serve para não mostrar o cookie disponível no inspecionar
  if (!token) {
    return NextResponse.redirect(signInUrl, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; path=/; HttpOnly; max-age=20`,
      },
    })
  }

  return NextResponse.next()
}

// Matcher: em quais endereços da minha aplicação, quero disparar esse middleware
export const config = {
  matcher: '/memories/:path*',
}
