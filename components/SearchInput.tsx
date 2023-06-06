'use client'

import Input from '@/commons/Input'
import useDebounce from '@/hooks/useDebounce'
import { useRouter } from 'next/navigation'
import qs from 'query-string'
import React, { useEffect, useState } from 'react'

const SearchInput = () => {
  const router = useRouter()
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)

  useEffect(() => {
    const query = {
      title: debouncedValue,
    }

    const url = qs.stringifyUrl({
      url: '/search',
      query: query,
    })
    router.push(url)
  }, [debouncedValue, router])

  return <Input value={value} placeholder='What do you want to listen to ?' onChange={e => setValue(e.target.value)} />
}

export default SearchInput
