import { motion, useAnimation } from 'framer-motion'
import Header from '../components/Header'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'


const Congrats = styled(Typography)`
  text-align: center;
  white-space: normal;
`

const Cat = styled.iframe`
  margin-top: ${props => props.theme.spacing(8)};;
  width: 100%; 
  height: 100%;
  border: none;
`

const FinishPage = () => {
  document.body.style.overflow = 'hidden'
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
        <Cat src="https://giphy.com/embed/BK1EfIsdkKZMY"></Cat>
      </motion.div>
      <Confetti
        width={width}
        height={height}
      />
    </>
  )
}

export default FinishPage
