import { useState, useEffect } from 'react'

import { ITransaction } from '../types'
import { REFRESH_INTERVAL } from '../constants'

export const useFetch = (url: string) => {
  const [data, setData] = useState<ITransaction[]>([])

  // Get Txs at the first time before `setInterval` works
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })

    // Get Txs from server in every `REFRESH_INTERVAL` milliseconds
    const interval = setInterval(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log('fetched latest txs successfully!')
          setData(data)
        })
    }, REFRESH_INTERVAL)

    return () => {
      // Clear interval before unmount
      clearInterval(interval)
    }
  }, [url])

  // Return sorted txs by `time`
  return data.sort((a: ITransaction, b: ITransaction) =>
    a.time < b.time ? -1 : 1,
  )
}
