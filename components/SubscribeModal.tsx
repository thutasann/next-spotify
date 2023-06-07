'use client'

import Button from '@/commons/Button'
import { Price, ProductWithPirce } from '@/types'
import React from 'react'
import Modal from './Modal'

interface ISubscribeModal {
  products: ProductWithPirce[]
}

const formatPrice = (price: Price) => {
  const priceString = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 0,
  }).format((price?.unit_amount || 0) / 100)

  return priceString
}

const SubscribeModal: React.FC<ISubscribeModal> = ({ products }) => {
  console.log('products', products)
  let content = <div className='text-center'>No products available.</div>

  if (products?.length) {
    content = (
      <div>
        {products.map(product => {
          if (!product.prices?.length) {
            return <div key={product.id}>No prices available</div>
          }

          return product.prices.map(price => (
            <Button key={price.id} className='mb-4'>
              {`Subscribe for ${formatPrice(price)} a ${price.interval}`}
            </Button>
          ))
        })}
      </div>
    )
  }

  return (
    <Modal title='Only for premium users' description='Listen to music with Spotify Premium' isOpen onChange={() => {}}>
      {content}
    </Modal>
  )
}

export default SubscribeModal
