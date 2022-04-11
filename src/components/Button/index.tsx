import styled, { css } from 'styled-components'

interface IButton {
  disabled?: boolean
}

export const Button = styled.button<IButton>`
  cursor: pointer;
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  width: auto;
  font-size: 20px;
  padding: 3px 20px;
  margin-bottom: 8px;
  margin-left: 10px;

  ${(props) => {
    if (props.disabled)
      return css`
        opacity: 0.5;
      `
    else
      return css`
        &:hover {
          background: palevioletred;
          color: white;
        }
      `
  }}
`
