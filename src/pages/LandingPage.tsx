import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { Link } from 'react-router-dom'
import TypeAnimation from 'react-type-animation'

const AppTitle = styled(TypeAnimation)`
  font-size: calc(50px + 1vmin);
  text-transform: lowercase;
  margin: ${props => props.theme.spacing(4)};
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
`

const AppDescription = styled(Typography)`
  margin: ${props => props.theme.spacing(4)};
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  width: 100%;
`

const ButtonWrapper = styled.div`
  display: flex;
  margin: ${props => props.theme.spacing(4)};
`

const ButtonText = styled.span`
  margin: ${props => props.theme.spacing(1, 0, 0, 2)};
`

const LandingPage = () => (
  <>
    <AppTitle
      cursor={true}
      sequence={[1000, 'progg.it']}
      wrapper="h1"
    />
    <AppDescription>
      Lær deg programmering!
    </AppDescription>
    <ButtonWrapper>
        <Button
          data-cy="start-button"
          component={Link}
          variant="contained"
          to="assignment/0"
        >
          <PlayCircleOutlineIcon/>
          <ButtonText>
            Start
          </ButtonText>
        </Button>
    </ButtonWrapper>
  </>
)


export default LandingPage
