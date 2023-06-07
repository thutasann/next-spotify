import SubscribeModal from '@/components/SubscribeModal'
import { Song } from '@/types'
import useAuthModal from './useModal'
import usePlayer from './usePlayer'
import useSubscribeModal from './useSubscribeModal'
import { useUser } from './useUser'

const useOnPlay = (songs: Song[]): ((id: string) => void) => {
  const player = usePlayer()
  const subscribeModal = useSubscribeModal()
  const authModal = useAuthModal()
  const { user, subscription } = useUser()

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen()
    }

    if (!subscription) {
      return subscribeModal.onOpen()
    }

    player.setId(id)
    player.setIds(songs?.map(song => song.id))
  }

  return onPlay
}

export default useOnPlay
