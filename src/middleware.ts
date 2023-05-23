import { NextRequest, NextResponse } from 'next/server'

const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}

// Matcher: em quais endereços da minha aplicação, quero disparar esse middleware
export const config = {
  matcher: '/memories/:path*',
}