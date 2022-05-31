import { Link as RouterLink, useParams } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import CodeEditor from '../coding/CodeEditor'
import Solution from '../coding/Solution'
import { ButtonGroup } from '../styled/ButtonGroup'
import { useAnimation, motion } from 'framer-motion'


const AssignmentWrapper = styled.div`
  width: 850px;
  
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

const AssignmentPage = () => {
  const { index } = useParams()
  const [assignments, setAssignments] = useState<Assignment[]>()
  let indexNumber = 0
  if (typeof index === "string") {
    indexNumber = parseInt(index)
  }

  const controls = useAnimation()

  useEffect(() => {
      import('../data/assignmentData.json')
        .then((res) => setAssignments(res.default))
        .catch(_ => null)
  }, [indexNumber])


  const nextIndex = indexNumber + 1
  const previousIndex = indexNumber - 1

  const previousPage = previousIndex >= 0 ? '/assignment/'+previousIndex : '/'

  if(!assignments) return <></>

  let currentAssignment = assignments[indexNumber]

  const variants = {
    visible: { y: 0 },
    hidden: { y: 2000, overflow: 'hidden' },
  }

  return (
    <motion.div
      key={indexNumber}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
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
              component={RouterLink}
              variant="outlined"
              to={previousPage}
            >
              Tilbake
            </Button>
            <Button
              data-cy="next-assignment-button"
              component={RouterLink}
              variant="contained"
              to={'/assignment/'+nextIndex}
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
