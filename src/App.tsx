import styled from "styled-components";
import {Button, Typography} from "@mui/material";

const AppWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const AppTitle = styled(Typography)`
  font-size: calc(50px + 2vmin);
  text-transform: uppercase;
  margin: 2rem;
`

const ButtonWrapper = styled.div`
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
