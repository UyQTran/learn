import {Link, useParams} from "react-router-dom";
import {Button, Typography} from "@mui/material";
import styled from "styled-components";
import {useEffect, useState} from "react";
import CodeEditor from "../coding/CodeEditor";


const AssignmentWrapper = styled.div`
  width: 40%;

  @media only screen and (max-width: 1000px) {
    width: 90%;
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
  a:not(:last-child) {
    margin-right: 1rem;
  }
`

interface Assignment {
  title?: string;
  description: string;
  text: string;
  hint: string;
  code: string;
  solution: {};
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

  const getPreviousPage = () => previousIndex >= 0 ? '/assignment/'+previousIndex : '/'

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
          <CodeEditor initialCode={currentAssignment.code}/>
          <ButtonWrapper>
            <Button
              component={Link}
              variant="outlined"
              to={getPreviousPage()}
            >
              Forrige oppgave
            </Button>
            <Button
              component={Link}
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
