import styled from "styled-components";
import {Button, Typography} from "@mui/material";

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

function LandingPage() {

  return (
    <>
      <AppTitle>Lørn</AppTitle>
      <ButtonWrapper>
        <Button variant="contained">Begynn</Button>
      </ButtonWrapper>
    </>
  )
}

export default LandingPage
