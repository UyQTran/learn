import styled from 'styled-components'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import {useEffect, useState} from 'react'
import { Button } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import usePythonCompiler from './usePythonCompiler'

const CodeEditorWrapper = styled.div`
  color: ${props => props.theme.palette.secondary.dark};
`

const ButtonText = styled.span`
  margin: ${props => props.theme.spacing(1, 0, 0, 2)};
`

const OutputWindow = styled.pre`
  background: ${props => props.theme.palette.primary.light};
  height: 150px;
  padding: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.typography.h5.fontSize};
  white-space: pre-wrap;
  overflow: auto;
`

const CodeWindow = styled(CodeMirror)`
  margin-bottom: ${props => props.theme.spacing(4)};
  font-size: ${props => props.theme.typography.h5.fontSize};
  div {
    white-space: normal;
  }
`

interface CodeEditorProps {
  initialCode: string
  editorOnChangeCallback: (code: string) => void
  runClickCallback: () => void
  outputCallback: (output: string) => void
  isSandbox?: boolean
}

const CodeEditor = (props: CodeEditorProps) => {
  const [code, setCode] = useState(props.initialCode)
  const [output, compile] = usePythonCompiler()

  const handleRunClick = () => {
    props.runClickCallback()
    compile(code.replace(' ', ' '))
  }

  useEffect(() => {
    props.outputCallback(output)
  }, [output])

  useEffect(() => {

  }, [code])

  return (
    <CodeEditorWrapper>
      <CodeWindow
        data-cy="coding-window"
        value={code}
        height="250px"
        extensions={[python()]}
        onChange={value => {
          props.editorOnChangeCallback(value)
          setCode(value)
        }}
      />
      <Button
        data-cy="compile-button"
        variant={props.isSandbox ? 'contained' : 'outlined'}
        onClick={handleRunClick}
      >
        <PlayCircleOutlineIcon/>
        <ButtonText>
          Kjør
        </ButtonText>
      </Button>
      <OutputWindow data-cy="output-window">{output}</OutputWindow>
    </CodeEditorWrapper>
  )
}

export default CodeEditor
