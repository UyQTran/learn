import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import { useNavigate } from 'react-router-dom'
import Link from '@mui/material/Link'
import TypeAnimation from 'react-type-animation'
import { motion, useAnimation } from 'framer-motion'

const LandingPageWrapper = styled.div`
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AppTitle = styled(TypeAnimation)`
  font-size: calc(50px + 1vmin);
  text-transform: lowercase;
  text-align: center;;
  margin: ${props => props.theme.spacing(8)};
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

const LandingPage = () => {
  const navigate = useNavigate()
  const controls = useAnimation()

  const handleStartClick = (to: string) => async () => {
    document.body.style.overflow = 'hidden'
    await controls.start(() => ({
      y: '-7vh',
      children: "font-size: 10px",
      transition: {
        duration: 0.35,
        ease: 'easeOut'
      },
    }))
    navigate(to)
  }

  return (
  <LandingPageWrapper>
    <motion.div
      initial="visible"
      animate={controls}
      key={0}
    >
      <AppTitle
        cursor={true}
        sequence={[1000, 'progg.it']}
        wrapper="h1"
      />
    </motion.div>
    <AppDescription>
      La oss knekke koden!
    </AppDescription>
    <ButtonWrapper>
      <Button
        data-cy="sandbox-button"
        variant="outlined"
        onClick={handleStartClick('sandbox')}
      >
        <LightbulbIcon/>
        <ButtonText>
          Sandkassa
        </ButtonText>
      </Button>
      <Button
        data-cy="start-button"
        variant="contained"
        onClick={handleStartClick('assignment/0')}
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
  </LandingPageWrapper>)
}


export default LandingPage
