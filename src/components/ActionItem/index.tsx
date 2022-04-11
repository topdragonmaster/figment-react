import React from 'react'
import styled from 'styled-components'

import { Label, Text, TextState } from '../common/styles'

interface IActionItem {
  gas?: number
  deposit?: string
  method_name?: string
  type?: string
}

const Container = styled.div`
  display: flex;
  background: white;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  background-clip: border-box;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  margin-top: 5px;
`

const Meta = styled.div`
  display: flex;
  background: white;
  align-items: center;
  flex: 1;
`

export const ActionItem: React.FC<IActionItem> = ({
  gas,
  deposit,
  method_name,
  type,
}) => {
  return (
    <Container>
      {gas && (
        <Meta>
          <Label>Gas:</Label>
          <Text state={TextState.normal}>{gas}</Text>
        </Meta>
      )}

      {deposit && (
        <Meta>
          <Label>Deposit:</Label>
          <Text state={TextState.normal}>{deposit}</Text>
        </Meta>
      )}

      {method_name && (
        <Meta>
          <Label>Method_name:</Label>
          <Text state={TextState.normal}>{method_name}</Text>
        </Meta>
      )}

      <Meta>
        <Label>Type:</Label>
        <Text state={TextState.normal}>{type}</Text>
      </Meta>
    </Container>
  )
}
