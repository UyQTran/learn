import { Typography } from '@mui/material'
import styled from 'styled-components'
import CodeEditor from '../coding/CodeEditor'
import { motion, useAnimation } from 'framer-motion'
import Header from '../components/Header'

const SandboxWrapper = styled.div`
  width: 850px;
  animation: fadeIn 0.3s;

  @keyframes fadeIn {
    0% {
      opacity: 0.25;
      margin-top: 50px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 95vw;
    
    @keyframes fadeIn {
      0% {
        margin-top: 50px;
      }
      100% {
        margin-top: 0;
      }
    }
  }
`

const SandboxTitle = styled(Typography)`
  font-size: calc(20px + 1vmin);
  text-transform: uppercase;
  margin: ${props => props.theme.spacing(4, 0)};
`

const SandboxDescription = styled(Typography)`
  margin: ${props => props.theme.spacing(4, 0)};
`

const SandboxPage = () => {
  document.body.style.overflow = 'auto'
  const controls = useAnimation()
  return (
    <>
      <Header shouldAnimate={true}/>
      <motion.div
        initial="visible"
        animate={controls}
      >
        <SandboxWrapper>
          <SandboxTitle variant="h2">
              Sandkassa
          </SandboxTitle>
          <SandboxDescription variant="subtitle1">
              Programmer akkurat det du vil!
          </SandboxDescription>
          <CodeEditor
            initialCode=""
            isSandbox={true}
            runClickCallback={() => {}}
            editorOnChangeCallback={() => {}}
            outputCallback={()=>{}}/>
        </SandboxWrapper>
      </motion.div>
    </>
  )
}

export default SandboxPage
