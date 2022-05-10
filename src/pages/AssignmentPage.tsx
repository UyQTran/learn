import {useParams} from "react-router-dom";

function AssignmentPage() {
  const { index } = useParams();

  return (
    <div>
      Oppgaver {index}
    </div>
  )
}

export default AssignmentPage
