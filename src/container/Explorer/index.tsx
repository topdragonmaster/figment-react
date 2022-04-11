import React, { useState } from 'react'
import get from 'lodash/get'

import { GET_TX_ENDPOINT, FilterOptions } from '../../constants'
import { useFetch } from '../../hooks'
import { FilterOption } from '../../types'
import {
  TextMap,
  ActionItem,
  Button,
  Select,
  TextState,
} from '../../components'

import { Container, Loader, Title, Content, Navigator } from './styles'

export const Explorer: React.FC = () => {
  const txs = useFetch(GET_TX_ENDPOINT) // Get up-to-dated & sorted transactions
  const [filterOption, setFilterOption] = useState(FilterOption.Success) // Set default filter to `Success` for filtering transactions
  const filteredTxs = txs.filter((item) => {
    switch (filterOption) {
      case FilterOption.Success:
        return item.success
      case FilterOption.Failure:
        return !item.success
      case FilterOption.All:
      default:
        return true
    }
  })
  const [index, setIndex] = useState(0) // current index of filtered Txs

  if (filteredTxs.length === 0) {
    // Show loader while fetching transactions
    return (
      <Container>
        <Loader>
          <h1>Loading...</h1>
        </Loader>
      </Container>
    )
  }

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
  } = filteredTxs[index]

  const handlePrevTx = () => {
    // Set prev transaction to show
    setIndex(index - 1)
  }

  const handleNextTx = () => {
    // Set next transaction to show
    setIndex(index + 1)
  }

  const handleFilterTx = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (filterOption === event.target.value) {
      return
    }

    // Set filter option from one of ['All', 'Success', 'Failure']
    setFilterOption(event.target.value as FilterOption)
    // Show the first transaction once the filter option has been changed
    setIndex(0)
  }

  return (
    <Container>
      <Title>Figment Transaction Explorer</Title>

      <Navigator>
        <Button onClick={handlePrevTx} disabled={index <= 0}>
          Prev
        </Button>

        <div>
          <strong>
            Transaction {index + 1} / {filteredTxs.length}
          </strong>
          <Select onChange={handleFilterTx} value={filterOption}>
            {FilterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>

        <Button
          onClick={handleNextTx}
          disabled={index >= filteredTxs.length - 1}
        >
          Next
        </Button>
      </Navigator>

      <Content>
        <TextMap label="Sender :" content={sender} />
        <TextMap label="Receiver :" content={receiver} />

        <hr />

        <TextMap
          label="Created_time :"
          content={new Date(created_at).toLocaleString()}
        />
        <TextMap
          label="Updated_time :"
          content={new Date(updated_at).toLocaleString()}
        />
        <TextMap label="Time :" content={new Date(time).toLocaleString()} />

        <hr />

        <TextMap label="Hash :" content={hash} />
        <TextMap label="Blocked_hash :" content={block_hash} />
        <TextMap label="Gas_burnt :" content={gas_burnt} />
        <TextMap
          label="Status :"
          content={success ? 'Success' : 'Failure'}
          state={success ? TextState.success : TextState.failure}
        />

        <hr />

        <h1>{actions_count} Action(s)</h1>

        {actions.map((item, index) => {
          return (
            <ActionItem
              key={index}
              gas={get(item.data, 'gas', undefined)}
              deposit={get(item.data, 'deposit', undefined)}
              method_name={get(item.data, 'method_name', undefined)}
            />
          )
        })}
      </Content>
    </Container>
  )
}
