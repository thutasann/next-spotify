import { create } from 'zustand'

interface eSubscribeModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useSubscribeModal = create<eSubscribeModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useSubscribeModal
