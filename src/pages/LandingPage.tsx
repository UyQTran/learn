import styled from "styled-components";
import {Button, Typography, useTheme} from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CornerGraphic from "../graphicals/CornerGraphic";
import {Link} from "react-router-dom";

const AppTitle = styled(Typography)`
  font-size: calc(50px + 1vmin);
  text-transform: uppercase;
  margin: 1rem;
`

const AppDescription = styled(Typography)`
  margin: 1rem;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  width: 100%;
`

const ButtonWrapper = styled.div`
  display: flex;
  margin: 1rem;
  
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    a:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  
  @media only screen and (min-width: 600px) {
    a:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

const ButtonText = styled.span`
  margin: 0.25rem 0 0 0.5rem;
`


function LandingPage(props: any) {
  const theme = useTheme()

  return (
    <>
      <CornerGraphic theme={theme}/>
      <CornerGraphic theme={theme} inverted/>
      <AppTitle variant="h1">Lørn</AppTitle>
      <AppDescription>
        Lær deg programmering!
      </AppDescription>
      <ButtonWrapper>
          <Button
            component={Link}
            variant="contained"
            to="assignment/0"
          >
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
