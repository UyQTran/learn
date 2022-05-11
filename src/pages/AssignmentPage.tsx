import {Link, useParams} from "react-router-dom";
import {Button, Typography} from "@mui/material";
import styled from "styled-components";
import {useEffect, useState} from "react";

const AssignmentWrapper = styled.div`
`

const AssignmentTitle = styled(Typography)`
  font-size: calc(30px + 1vmin);
  text-transform: uppercase;
  margin: 1rem;
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
      import('../../assets/assignmentData.json')
        .then((res) => setAssignment(res.default[indexNumber]))
        .catch(_ => null);
  }, [indexNumber]);

  const nextIndex = indexNumber + 1

  return (
      assignment ?
        <AssignmentWrapper>
          <AssignmentTitle variant="h1">
              {assignment.title}
          </AssignmentTitle>
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
