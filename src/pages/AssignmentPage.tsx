import { useNavigate, useParams } from 'react-router-dom'
import { Button, LinearProgress, Typography } from '@mui/material'
import styled from 'styled-components'
import {useContext, useEffect, useState} from 'react'
import CodeEditor from '../coding/CodeEditor'
import Solution from '../coding/Solution'
import { motion, useAnimation } from 'framer-motion'
import AssignmentDescription from '../coding/AssignmentDescription'
import Header from '../components/Header'
import {UserContext} from "../context/UserProgressionContext";


const AssignmentWrapper = styled.div`
  width: 80%;
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  *:not(:last-child) {
    margin-right: ${props => props.theme.spacing(4)};

    @media only screen and (max-width: 1100px) {
      margin-right: ${props => props.theme.spacing(2)};
    }
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

const AssigmentProgressionButton = styled(Button)`
  min-width: 140px;
  max-width: 200px;

  @media only screen and (max-width: 1100px) {
    min-width: 100px;
    max-width: 200px;
  }
`

const AssigmentProgressBar = styled(LinearProgress)`
  width: 100%;
`

export interface Assignment {
  id: string
  nextId: string
  title: string
  description: string
  postDescription: {
    text: string
    shouldShowIfSolved: boolean
  }
  initialCode: string
  solution: {
    solved: string | number
    code: string
  }
}

const AssignmentPage = () => {
  const userContext = useContext(UserContext)
  const { index } = useParams()
  const controls = useAnimation()
  const [assignments, setAssignments] = useState<Assignment[]>()
  const [hasClickedRun, setHasClickedRun] = useState<boolean>(false)
  const [hasSolved, setHasSolved] = useState<boolean>(false)
  const navigate = useNavigate()
  document.body.style.overflow = 'auto'
  let indexNumber = 0
  if (typeof index === "string") {
    indexNumber = parseInt(index)
  }

  useEffect(() => {
    setHasClickedRun(false)
      import('../data/assignmentData.json')
        .then((res) => setAssignments(res.default))
        .catch(_ => null)
  }, [indexNumber])

  const nextIndex = indexNumber + 1
  const previousIndex = indexNumber - 1

  const previousPage = previousIndex >= 0 ? '/assignment/'+previousIndex : '/'


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

  const shouldShowPostDescription = (hasClickedRun
    && hasSolved
    && currentAssignment.postDescription.shouldShowIfSolved)
    || (hasClickedRun
      && !currentAssignment.postDescription.shouldShowIfSolved)
    || userContext.user.progression[currentAssignment.id].hasSolved

  return (
    <>
      <Header/>
      <AssignmentWrapper>
        <ButtonGroup>
          <AssigmentProgressionButton
            data-cy="previous-page-button"
            variant="outlined"
            onClick={handlePreviousClick}
          >
            Tilbake
          </AssigmentProgressionButton>
          <AssigmentProgressBar variant="determinate" value={(indexNumber/(assignments.length-1))* 100} />
          <AssigmentProgressionButton
            data-cy="next-assignment-button"
            variant="contained"
            onClick={handleNextClick}
            disabled={indexNumber+1 >= assignments.length || !shouldShowPostDescription}
          >
            Neste
          </AssigmentProgressionButton>
        </ButtonGroup>
        <motion.div
          initial="visible"
          animate={controls}
          key={indexNumber}
        >
          <AssignmentTitle variant="h2">
            {(indexNumber+1)+ ': ' + currentAssignment.title}
          </AssignmentTitle>
          <AssigmentGrid>
            <AssignmentDescription
              description={currentAssignment.description}
              postDescription={currentAssignment.postDescription.text}
              shouldShowPostDescription={shouldShowPostDescription}/>
            <div>
              <CodeEditor
                initialCode={userContext.user.progression[currentAssignment.id]?.code}
                editorOnChangeCallback={code => userContext.setProgressionCode(code, currentAssignment.id)}
                runClickCallback={() => {
                  setHasClickedRun(true)
                  userContext.solveProgression(currentAssignment.id)
                }}
                outputCallback={(output) => setHasSolved(output.includes(""+currentAssignment.solution.solved))}
              />
              <Solution solutionCode={currentAssignment.solution.code}/>
            </div>
          </AssigmentGrid>
        </motion.div>
      </AssignmentWrapper>
    </>
  )
}

export default AssignmentPage
