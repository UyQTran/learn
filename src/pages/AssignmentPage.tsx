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

interface Assignment {
  title?: string;
  description: string;
  text: string;
  hint: string;
  code: string;
  solution: {};
}

function AssignmentPage() {
  const { index } = useParams();
  const [assignment, setAssignment] = useState<Assignment>();
  let indexNumber = 0
  if (typeof index === "string") {
    indexNumber = parseInt(index)
  }

  useEffect(() => {
      import('../data/assignmentData.json')
        .then((res) => setAssignment(res.default[indexNumber]))
        .catch(_ => null);
  }, [indexNumber]);

  const nextIndex = indexNumber + 1

  return (
      assignment ?
        <AssignmentWrapper>
          <AssignmentTitle variant="h2">
              {assignment.title}
          </AssignmentTitle>
          <AssignmentDescription variant="subtitle1">
              {assignment.description}
          </AssignmentDescription>
          <CodeEditor/>
          <Button
            component={Link}
            variant="contained"
            to={'/assignment/'+nextIndex}
          >
            Neste oppgave
          </Button>
        </AssignmentWrapper>
      : <></>
  )
}

export default AssignmentPage
