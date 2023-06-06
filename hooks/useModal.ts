import { create } from 'zustand'

interface IAuthModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useAuthModal = create<IAuthModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useAuthModal
