import {Typography} from '@mui/material'
import styled from 'styled-components'

const AssignmentDescriptionWrapper = styled(Typography)`
  margin: ${props => props.theme.spacing(4, 0)};
`

const AssignmentPostDescription = styled(Typography)`
  margin: ${props => props.theme.spacing(4, 0)};
  
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0.25;
      margin-top: 50px;
    }
    100% {
      opacity: 1;
      margin-top: 1rem;
    }
  }
`

interface AssignmentDescriptionProps {
  description: string
  postDescription: string
  shouldShowPostDescription: boolean
}

const AssignmentDescription = (props: AssignmentDescriptionProps) => {
  document.body.style.overflow = 'auto'

  return (
    <div>
      <AssignmentDescriptionWrapper variant="subtitle1">
        {props.description}
      </AssignmentDescriptionWrapper>
      {props.postDescription ? props.shouldShowPostDescription ? <AssignmentPostDescription variant="subtitle1">
        {props.postDescription}
      </AssignmentPostDescription> : null : null}
    </div>
  )
}

export default AssignmentDescription
