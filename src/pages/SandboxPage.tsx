import {useNavigate, useParams} from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import CodeEditor from '../coding/CodeEditor'
import { motion, useAnimation } from 'framer-motion'
import HomeIcon from '@mui/icons-material/Home'


const AssignmentWrapper = styled.div`
  width: 850px;
  animation: fadeIn 0.5s;

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
    width: 95%;


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

const AssignmentTitle = styled(Typography)`
  font-size: calc(20px + 1vmin);
  text-transform: uppercase;
  margin: ${props => props.theme.spacing(4, 0)};
`

const AssignmentDescription = styled(Typography)`
  margin: ${props => props.theme.spacing(4, 0)};
`

const ButtonText = styled.span`
  margin: ${props => props.theme.spacing(1, 0, 0, 2)};
`


interface Assignment {
  title?: string
  description: string
  initialCode: string
  solution: {
    solved: string | number
    code: string
  }
}

const SandboxPage = () => {
  document.body.style.overflow = 'auto'
  const { index } = useParams()
  const controls = useAnimation()
  const [assignments, setAssignments] = useState<Assignment[]>()
  let indexNumber = 0
  if (typeof index === "string") {
    indexNumber = parseInt(index)
  }

  useEffect(() => {
      import('../data/assignmentData.json')
        .then((res) => setAssignments(res.default))
        .catch(_ => null)
  }, [indexNumber])

  const nextIndex = indexNumber + 1
  const previousIndex = indexNumber - 1

  const previousPage = previousIndex >= 0 ? '/assignment/'+previousIndex : '/'

  const navigate = useNavigate()

  if(!assignments) return <></>

  let currentAssignment = assignments[indexNumber]

  const handlePreviousClick = async () => {
    await controls.start(() => ({
      opacity: 0,
      y: 250,
      transition: {
        duration: 0.25
      },
    }))
    navigate(previousPage)
  }

  return (
    <motion.div
      initial="visible"
      animate={controls}
      key={indexNumber}
    >
      <AssignmentWrapper>
        <AssignmentTitle variant="h2">
            Sandkassa
        </AssignmentTitle>
        <AssignmentDescription variant="subtitle1">
            Programmer akkurat det du vil!
        </AssignmentDescription>
        <CodeEditor initialCode={currentAssignment.initialCode} isSandbox={true}/>
        <Button
          data-cy="previous-page-button"
          variant="outlined"
          onClick={handlePreviousClick}
        >
          <HomeIcon/>
          <ButtonText>
            Hjem
          </ButtonText>
        </Button>
      </AssignmentWrapper>
    </motion.div>
  )
}

export default SandboxPage
