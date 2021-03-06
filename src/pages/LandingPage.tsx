import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import TypeAnimation from 'react-type-animation'

const AppTitle = styled(TypeAnimation)`
  font-size: calc(50px + 1vmin);
  text-transform: lowercase;
  margin: ${props => props.theme.spacing(4)};
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
`

const AppDescription = styled(Typography)`
  margin: ${props => props.theme.spacing(4)};
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  width: 100%;
`

const AppFooter = styled.footer`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  margin: ${props => props.theme.spacing(4)};
  word-wrap: break-word;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  
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
          data-cy="sandbox-button"
          component={RouterLink}
          variant="outlined"
          to="sandbox"
        >
          <LightbulbIcon/>
          <ButtonText>
            Sandkassa
          </ButtonText>
        </Button>
        <Button
          data-cy="start-button"
          component={RouterLink}
          variant="contained"
          to="assignment/0"
        >
          <PlayCircleOutlineIcon/>
          <ButtonText>
            Start
          </ButtonText>
        </Button>
    </ButtonWrapper>
    <AppFooter>
      <Link href="https://www.linkedin.com/in/uy-tran-28b88557/">
        Om meg
      </Link>
      <Link href="mailto:uqtontran@gmail.com">
        Kontakt meg
      </Link>
    </AppFooter>
  </>
)


export default LandingPage
