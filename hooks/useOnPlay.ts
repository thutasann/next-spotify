import { Song } from '@/types'
import useAuthModal from './useModal'
import usePlayer from './usePlayer'
import { useUser } from './useUser'

const useOnPlay = (songs: Song[]): ((id: string) => void) => {
  const player = usePlayer()
  const authModal = useAuthModal()
  const { user } = useUser()

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen()
    }
    player.setId(id)
    player.setIds(songs?.map(song => song.id))
  }

  return onPlay
}

export default useOnPlay
