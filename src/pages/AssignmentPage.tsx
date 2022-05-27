import {Link as RouterLink, useParams} from "react-router-dom";
import {Button, Typography} from "@mui/material";
import styled from "styled-components";
import {useEffect, useState} from "react";
import CodeEditor from "../coding/CodeEditor";
import Solution from "../coding/Solution";


const AssignmentWrapper = styled.div`
  width: 850px;
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 95%;
  }
`

const AssignmentTitle = styled(Typography)`
  font-size: calc(20px + 1vmin);
  text-transform: uppercase;
  margin: 1rem 0;
`

const AssignmentDescription = styled(Typography)`
  margin: 1rem 0;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface Assignment {
  title?: string
  description: string
  text: string
  hint: string
  initialCode: string
  solution: {
    solved: string | number
    code: string
  };
}

const AssignmentPage = () => {
  const { index } = useParams();
  const [assignments, setAssignments] = useState<Assignment[]>();
  let indexNumber = 0
  if (typeof index === "string") {
    indexNumber = parseInt(index)
  }

  useEffect(() => {
      import('../data/assignmentData.json')
        .then((res) => setAssignments(res.default))
        .catch(_ => null);
  }, [indexNumber]);

  const nextIndex = indexNumber + 1
  const previousIndex = indexNumber - 1

  const previousPage = previousIndex >= 0 ? '/assignment/'+previousIndex : '/'

  if(!assignments) return <></>

  let currentAssignment = assignments[indexNumber]

  return (
        <AssignmentWrapper>
          <AssignmentTitle variant="h2">
              {currentAssignment.title}
          </AssignmentTitle>
          <AssignmentDescription variant="subtitle1">
              {currentAssignment.description}
          </AssignmentDescription>
          <CodeEditor initialCode={currentAssignment.initialCode}/>
          <Solution solutionCode={currentAssignment.solution.code}/>
          <ButtonWrapper>
            <Button
              component={RouterLink}
              variant="outlined"
              to={previousPage}
            >
              Tilbake
            </Button>
            <Button
              component={RouterLink}
              variant="contained"
              to={'/assignment/'+nextIndex}
              disabled={indexNumber+1 >= assignments.length}
            >
              Neste oppgave
            </Button>
          </ButtonWrapper>
        </AssignmentWrapper>
  )
}

export default AssignmentPage
