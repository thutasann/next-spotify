'use server'

import { Song } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getSongs = async (): Promise<Array<Song>> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  })

  const { data, error } = await supabase.from('songs').select('*').order('created_at', { ascending: false })

  if (error) {
    console.error('ERROR GETTING SONGS => ', error)
  }

  return (data as Song[]) || []
}

export default getSongs
