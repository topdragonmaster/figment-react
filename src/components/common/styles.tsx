import styled from 'styled-components'

export enum TextState {
  normal,
  success,
  false,
}

export const Label = styled.p`
  padding-left: 20px;
  font-size: 17px;
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 10px;
`

export const Text = styled.p<{ state: TextState }>`
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
