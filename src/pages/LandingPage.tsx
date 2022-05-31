import styled from 'styled-components'
import {Button, Typography} from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import {Link} from 'react-router-dom'

const AppTitle = styled(Typography)`
  font-size: calc(50px + 1vmin);
  text-transform: uppercase;
  margin: ${props => props.theme.spacing(4)};
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
    <AppTitle variant="h1">Lørn</AppTitle>
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
