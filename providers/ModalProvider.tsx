'use client'

import AuthModal from '@/components/AuthModal'
import Modal from '@/components/Modal'
import SubscribeModal from '@/components/SubscribeModal'
import UploadModal from '@/components/UploadModal'
import { ProductWithPirce } from '@/types'
import React, { useEffect, useState } from 'react'

interface IModalProvider {
  products: ProductWithPirce[]
}

const ModalProvider: React.FC<IModalProvider> = ({ products }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  )
}

export default ModalProvider
