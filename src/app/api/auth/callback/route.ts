import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  const redirectTo = req.cookies.get('redirectTo')?.value

  const redirectUrl = redirectTo ?? new URL('/', req.url)

  // Redirecionamos, passando o COOKIE, o PATH do objeto de configuração, indica
  // quais rotas poderão acessar esse cookie

  const cookieExpireInSeconds = 60 * 60 * 24 * 30
  return NextResponse.redirect(redirectUrl, {
    headers: {
      'set-cookie': `token=${token}; path=/; max-age=${cookieExpireInSeconds}`,
    },
  })
}
