import styled from "styled-components";
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import {useEffect, useState} from 'react';
import MuiLink from "@mui/material/Link";

interface SolutionWrapperProps {
  isCollapsed: boolean
}

const SolutionCodeWrapper = styled.section<SolutionWrapperProps>`
  color: #282c34;
  margin-top: 0.25rem;
  * {
    overflow: hidden;
  }

  ${props => props.isCollapsed ? 'display: none' : ''}
`

const SolutionWrapper = styled.div`
  margin-top: 1rem;
`

interface SolutionProps {
  solutionCode: string
}

const Solution = (props: SolutionProps) => {
  const [isSolutionCollapsed, setIsSolutionCollapsed] = useState(true);

  useEffect(() => {
    setIsSolutionCollapsed(true)
  },[props])

  if(props.solutionCode === '') return <></>

  const lineCount = props.solutionCode.split('\n').length

  return (
    <>
      <SolutionWrapper>
        <MuiLink
          component="button"
          variant="body2"
          onClick={() => setIsSolutionCollapsed(!isSolutionCollapsed)}
        >
          Løsningsforlsag
        </MuiLink>
        <SolutionCodeWrapper isCollapsed={isSolutionCollapsed}>
          <CodeMirror
            readOnly
            value={props.solutionCode}
            height={lineCount*19 + 'px'}
            extensions={[python()]}
          />
        </SolutionCodeWrapper>
      </SolutionWrapper>
    </>
  )
}

export default Solution