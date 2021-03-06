import {useNavigate, useParams} from 'react-router-dom'
import {Button, LinearProgress, Typography} from '@mui/material'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import CodeEditor from '../coding/CodeEditor'
import Solution from '../coding/Solution'
import { motion, useAnimation } from 'framer-motion'


const AssignmentWrapper = styled.div`
  width: 80%;
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

const ButtonGroup = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 6fr 1fr;
  column-gap: ${props => props.theme.spacing(4)};

  @media only screen and (max-width: 1000px) {

    grid-template-columns: 1fr 3fr 1fr;
  }
`

const AssigmentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${props => props.theme.spacing(8)};

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const CodingWrapper = styled.div`
  min-width: 500px;
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

const AssignmentPage = () => {
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
      opacity: -2,
      y: 250,
      transition: {
        duration: 0.35
      },
    }))
    navigate(previousPage)
  }

  const handleNextClick = async () => {
    document.body.style.overflow = 'hidden'
    await controls.start(() => ({
      opacity: 0,
      x: -1000,
      transition: {
        duration: 0.35
      },
    }))
    navigate('/assignment/'+nextIndex)
  }

  return (
    <AssignmentWrapper>
      <ButtonGroup>
        <Button
          data-cy="previous-page-button"
          variant="outlined"
          onClick={handlePreviousClick}
        >
          Tilbake
        </Button>
        <LinearProgress variant="determinate" value={(indexNumber/(assignments.length-1))* 100} />
        <Button
          data-cy="next-assignment-button"
          variant="contained"
          onClick={handleNextClick}
          disabled={indexNumber+1 >= assignments.length}
        >
          Neste
        </Button>
      </ButtonGroup>
      <motion.div
        initial="visible"
        animate={controls}
        key={indexNumber}
      >
        <AssignmentTitle variant="h2">
          {currentAssignment.title}
        </AssignmentTitle>
        <AssigmentGrid>
          <AssignmentDescription variant="subtitle1">
            {currentAssignment.description}
          </AssignmentDescription>
          <CodingWrapper>
            <CodeEditor initialCode={currentAssignment.initialCode}/>
            <Solution solutionCode={currentAssignment.solution.code}/>
          </CodingWrapper>
        </AssigmentGrid>
      </motion.div>
    </AssignmentWrapper>

  )
}

export default AssignmentPage
