import {Link as RouterLink, useNavigate, useParams} from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import CodeEditor from '../coding/CodeEditor'
import Solution from '../coding/Solution'
import { ButtonGroup } from '../styled/ButtonGroup'
import { motion, useAnimation } from 'framer-motion'


const AssignmentWrapper = styled.div`
  width: 850px;
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0.5;
      margin-top: 50px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 95%;
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

interface Assignment {
  title?: string
  description: string
  initialCode: string
  solution: {
    solved: string | number
    code: string
  }
}

const AssignmentPage = (props: any) => {
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
      opacity: 0.5,
      x: -50,
      transition: {
        duration: 0.1
      },
    }))
    navigate(previousPage)
  }

  const handleNextClick = async () => {
    await controls.start(() => ({
      opacity: 0.5,
      x: 50,
      transition: {
        duration: 0.1
      },
    }))
    navigate('/assignment/'+nextIndex)
  }

  return (
    <motion.div
      initial="visible"
      animate={controls}
      key={indexNumber}
    >
      <AssignmentWrapper>
        <AssignmentTitle variant="h2">
            {currentAssignment.title}
        </AssignmentTitle>
        <AssignmentDescription variant="subtitle1">
            {currentAssignment.description}
        </AssignmentDescription>
        <CodeEditor initialCode={currentAssignment.initialCode}/>
        <Solution solutionCode={currentAssignment.solution.code}/>
        <ButtonGroup gridColumnCount={{desktop: 5, mobile: 2}}>
          <Button
            data-cy="previous-page-button"
            variant="outlined"
            onClick={handlePreviousClick}
          >
            Tilbake
          </Button>
          <Button
            data-cy="next-assignment-button"
            variant="contained"
            onClick={handleNextClick}
            disabled={indexNumber+1 >= assignments.length}
          >
            Neste oppgave
          </Button>
        </ButtonGroup>
      </AssignmentWrapper>
    </motion.div>
  )
}

export default AssignmentPage
