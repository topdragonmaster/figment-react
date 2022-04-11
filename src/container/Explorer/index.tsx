import React from 'react'

import { GET_TX_ENDPOINT } from '../../constants'
import { useFetch } from '../../hooks'
import { TextMap } from '../../components'

import { Container, Title, Content } from './styles'

export const Explorer: React.FC = () => {
  const txs = useFetch(GET_TX_ENDPOINT)
  if (txs.length === 0) return <div>Loading...</div>

  const { sender } = txs[0]
  return (
    <Container>
      <Title> Figment Transaction Explorer </Title>

      <Content>
        <TextMap label="Sender:" content={sender} />
      </Content>
    </Container>
  )
}
