import { useState, useEffect } from 'react'
import { ITransaction } from '../types'

export const useFetch = (url: string) => {
  const [data, setData] = useState<ITransaction[]>([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })

    const interval = setInterval(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
    }, 5000)
    return () => clearInterval(interval)
  }, [url])

  return data.sort((a: ITransaction, b: ITransaction) =>
    a.time < b.time ? -1 : 1,
  )
}
