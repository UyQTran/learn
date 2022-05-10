import styled from "styled-components";
import {Button} from "@mui/material";

const AppWrapper = styled.div`
  padding: 1rem;
`

const AppTitle = styled.h1`
  font-size: calc(50px + 2vmin);
  text-transform: uppercase;
  display: flex;
  justify-content: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  *:not(:last-child) {
    margin-right: 2rem;
  }
`

function App() {

  return (
    <AppWrapper>
      <AppTitle>Lørn</AppTitle>
      <ButtonWrapper>
        <Button variant="contained">Begynn</Button>
      </ButtonWrapper>
    </AppWrapper>
  )
}

export default App
