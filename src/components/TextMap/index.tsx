import React from 'react'
import styled from 'styled-components'

enum TextState {
  normal,
  success,
  false,
}

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

const Label = styled.p`
  padding-left: 20px;
  font-size: 17px;
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 10px;
`

const Content = styled.p<{ state: TextState }>`
  padding-left: 20px;
  font-size: 17px;
  display: flex;
  align-items: center;
  margin: 0px;
  flex: 1;
  color: ${(props: { state: TextState }) =>
    props.state === TextState.normal
      ? 'black'
      : props.state === TextState.success
      ? 'green'
      : 'red'};
  padding: 10px;
`

export const TextMap: React.FC<ITextMap> = ({
  label,
  content,
  state = TextState.normal,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Content state={state}>{content}</Content>
    </Container>
  )
}
