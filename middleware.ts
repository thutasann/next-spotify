import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supbase = createMiddlewareClient({
    req,
    res,
  })

  await supbase.auth.getSession()
  return res
}
