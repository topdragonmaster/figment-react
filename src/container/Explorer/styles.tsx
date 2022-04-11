import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;  width 1200px;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  background-color: #fff;
  border: 1px solid #e7eaf3;
  border-radius: 0.5rem;
  padding: 30px;
  margin: 30px auto;
`

export const Title = styled.h1`
  text-align: center;
`

export const Content = styled.div`
  padding: 20px;
  text-align: center;
  background-clip: border-box;
  border: 1px solid #e7eaf3;
  border-radius: 0.5rem;
  flex: 1;
  align-items: center;
`
