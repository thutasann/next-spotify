'use server'

import { Song } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { title } from 'process'
import getSongs from './getSongs'

const getSongsByTitle = async (tilte: string): Promise<Array<Song>> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  })

  if (!title) {
    const allSongs = await getSongs()
    return allSongs
  }

  const { data, error } = await supabase.from('songs').select('*').ilike('title', `%${tilte}%`).order('created_at', { ascending: false })

  if (error) {
    console.error('ERROR GETTING SONGS => ', error)
  }

  return (data as Song[]) || []
}

export default getSongsByTitle
