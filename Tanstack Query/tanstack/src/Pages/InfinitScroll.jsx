import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'

const InfinitScroll = () => {
    useInfiniteQuery({
        queryKey:['users'],
        queryFn:fetchUsers,
    })

  return (
    <div>
      <h1>Hey you </h1>
    </div>
  )
}

export default InfinitScroll
