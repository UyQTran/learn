import styled from "styled-components";

const AppWrapper = styled.div`
  padding: 1rem;
`

const AppTitle = styled.h1`
  font-size: calc(60px + 2vmin);
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`

function App() {

  return (
    <AppWrapper>
      <AppTitle>Lørn</AppTitle>
    </AppWrapper>
  )
}

export default App
