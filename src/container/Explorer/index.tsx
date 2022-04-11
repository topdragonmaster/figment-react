import React from 'react'
import get from 'lodash/get'

import { GET_TX_ENDPOINT } from '../../constants'
import { useFetch } from '../../hooks'
import { TextMap, ActionItem } from '../../components'

import { Container, Loader, Title, Content } from './styles'
import { TextState } from '../../components/common/styles'

export const Explorer: React.FC = () => {
  const txs = useFetch(GET_TX_ENDPOINT)

  if (txs.length === 0)
    return (
      <Container>
        <Loader>
          <h1>Loading...</h1>
        </Loader>
      </Container>
    )

  const {
    sender,
    receiver,
    created_at,
    updated_at,
    time,
    hash,
    block_hash,
    gas_burnt,
    actions_count,
    success,
    actions,
  } = txs[0]

  return (
    <Container>
      <Title> Figment Transaction Explorer </Title>

      <Content>
        <TextMap label="Sender :" content={sender} />
        <TextMap label="Receiver :" content={receiver} />

        <hr />

        <TextMap label="Created_time :" content={created_at} />
        <TextMap label="Updated_time :" content={updated_at} />
        <TextMap label="Time :" content={time} />

        <hr />

        <TextMap label="Hash :" content={hash} />
        <TextMap label="Blocked_hash :" content={block_hash} />
        <TextMap label="Gas_burnt :" content={gas_burnt} />
        <TextMap
          label="Status :"
          content={success ? 'Success' : 'Failure'}
          state={success ? TextState.success : TextState.failure}
        />

        <h1>{actions_count} Action(s)</h1>

        <hr />

        {actions.map((item, index) => {
          return (
            <ActionItem
              key={index}
              gas={get(item.data, 'gas', undefined)}
              deposit={get(item.data, 'deposit', undefined)}
              type={item.type}
              method_name={get(item.data, 'method_name', undefined)}
            />
          )
        })}
      </Content>
    </Container>
  )
}
