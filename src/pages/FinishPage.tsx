import { motion, useAnimation } from 'framer-motion'
import Header from '../components/Header'
import styled from 'styled-components'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { Typography } from '@mui/material'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'


const Congrats = styled(Typography)`
  text-align: center;
`

const Trophy = styled.div`
  display: flex;
  justify-content: center;
  svg {
    font-size: 30rem;
    color: ${props => props.theme.palette.primary.main};
    margin-right: 10rem;
  }
`

const Progger = styled(Typography)`
  color: ${props => props.theme.palette.secondary.dark};
  position: relative;
  top: 9rem;
  left: 20rem;
`


const FinishPage = () => {
  const controls = useAnimation()
  const { width, height } = useWindowSize()

  return (
    <>
      <Header shouldAnimate={false}/>
      <motion.div
        initial="visible"
        animate={controls}
      >

        <Congrats variant="h6">
          Gratulerer! Du klarte alle oppgavene og kan nå kalle deg selv en ekte progger!
        </Congrats>
        <Trophy>
          <Progger variant="h3">Progger</Progger>
          <EmojiEventsIcon/>
        </Trophy>
      </motion.div>
      <Confetti
        width={width}
        height={height}
      />
    </>
  )
}

export default FinishPage
