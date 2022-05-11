import styled from "styled-components";
import {Button, Typography} from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const AppTitle = styled(Typography)`
  font-size: calc(50px + 2vmin);
  text-transform: uppercase;
  margin: 2rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    button:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  
  @media only screen and (min-width: 600px) {
    button:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

const ButtonText = styled.span`
  margin: 0.25rem 0 0 0.5rem;
`

function LandingPage() {

  return (
    <>
      <AppTitle>Lørn</AppTitle>
      <ButtonWrapper>
        <Button variant="contained">
          <PlayCircleOutlineIcon/>
          <ButtonText>
            Start
          </ButtonText>
        </Button>
        <Button variant="outlined">
          <PrintIcon/>
          <ButtonText>
            Print
          </ButtonText>
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default LandingPage
