import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap !important;
  gap: 15px;
  width: 100vw;
  height: 100vh;
  min-height: 375px;

  .input, .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 48%;
    height: 90%;
  }
`
