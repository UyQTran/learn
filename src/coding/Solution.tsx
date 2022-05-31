import styled from 'styled-components'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import { useEffect, useState } from 'react'
import MuiLink from '@mui/material/Link'
import AnimateHeight from 'react-animate-height'

const SolutionCodeWrapper = styled.section`
  color: #282c34;
  margin-top: 0.25rem;
  * {
    overflow-y: hidden;
  }
`

const SolutionWrapper = styled.div`
  margin: 1rem;
`

interface SolutionProps {
  solutionCode: string
}

const Solution = (props: SolutionProps) => {
  const [isSolutionCollapsed, setIsSolutionCollapsed] = useState(true)

  useEffect(() => {
    setIsSolutionCollapsed(true)
  }, [props])

  if (props.solutionCode === '') return <></>

  const lineCount = props.solutionCode.split('\n').length

  return (
    <SolutionWrapper>
      <MuiLink
        data-cy="solution-button"
        component="button"
        variant="body2"
        onClick={() => setIsSolutionCollapsed(!isSolutionCollapsed)}
      >
        Vis løsningsforslag
      </MuiLink>
      <AnimateHeight
        duration={ 150 }
        height={ isSolutionCollapsed ? 0 : 'auto' }
      >
        <SolutionCodeWrapper>
          <CodeMirror
            readOnly
            data-cy="solution-code"
            value={props.solutionCode}
            height={lineCount * 19 + 'px'}
            extensions={[python()]}
          />
        </SolutionCodeWrapper>
      </AnimateHeight>
    </SolutionWrapper>
  )
}

export default Solution
