import {Link as RouterLink, useParams} from "react-router-dom";
import {Button, Typography} from "@mui/material";
import styled from "styled-components";
import {useEffect, useState} from "react";
import CodeEditor from "../coding/CodeEditor";
import Solution from "../coding/Solution";
import { ButtonGroup } from "../styled/ButtonGroup";


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
  )
}

export default AssignmentPage
