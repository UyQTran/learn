import styled from "styled-components";
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import usePythonCompiler from './usePythonCompiler';
import { ButtonGroup } from '../styled/ButtonGroup';

const CodeEditorWrapper = styled.div`
  color: #282c34;
`

const ButtonText = styled.span`
  margin: 0.25rem 0 0 0.5rem;
`

const OutputWindow = styled.pre`
  background: #fff;
  height: 150px;
  padding: 0.5rem;
  font-size: 16px;
  white-space: pre-wrap;
  overflow: auto;
`

const CodeWindow = styled(CodeMirror)`
  margin-bottom: 1rem;
  font-size: 16px;
`

interface CodeEditorProps {
  initialCode: string
}

const CodeEditor = (props: CodeEditorProps) => {
  const [code, setCode] = useState(props.initialCode)
  const [output, compile, resetOutput] = usePythonCompiler()

  useEffect(() => {
    setCode(props.initialCode)
    resetOutput()
  }, [props])


  return (
    <CodeEditorWrapper>
      <CodeWindow
        data-cy="coding-window"
        value={code}
        height="250px"
        extensions={[python()]}
        onChange={value => setCode(value)}
      />
      <ButtonGroup gridColumnCount={{desktop: 6, mobile: 2}}>
        <Button
          data-cy="compile-button"
          variant="outlined"
          onClick={() => compile(code)}
        >
          <PlayCircleOutlineIcon/>
          <ButtonText>
            Kjør
          </ButtonText>
        </Button>
        <Button
          data-cy="reset-output-button"
          variant="outlined"
          onClick={() => resetOutput()}
        >
          <HighlightOffIcon/>
          <ButtonText>
            Nullstill
          </ButtonText>
        </Button>
      </ButtonGroup>
      <OutputWindow data-cy="output-window">{output}</OutputWindow>
    </CodeEditorWrapper>
  )
}

export default CodeEditor
