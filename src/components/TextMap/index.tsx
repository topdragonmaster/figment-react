import React from 'react'
import styled from 'styled-components'

import { TextState, Label, Text } from '../common/styles'

interface ITextMap {
  label: string
  content: string
  state?: TextState
}

const Container = styled.div`
  display: flex;
  background: white;
  align-items: center;
`

export const TextMap: React.FC<ITextMap> = ({
  label,
  content,
  state = TextState.normal,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Text state={state}>{content}</Text>
    </Container>
  )
}
