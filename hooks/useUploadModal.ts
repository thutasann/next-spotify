import { create } from 'zustand'

interface IUploadStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useUploadModal = create<IUploadStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useUploadModal
