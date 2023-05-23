import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const redirectUrl = new URL('/', req.url)

  // Nessa rota logout estamos setando um cookie de 0s para 'deleta-lo'

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'set-cookie': `token=; path=/; max-age=0`,
    },
  })
}
