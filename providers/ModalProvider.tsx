'use client'

import AuthModal from '@/components/AuthModal'
import Modal from '@/components/Modal'
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <AuthModal />
}

export default ModalProvider
