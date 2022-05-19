import styled from "styled-components";
import runit from "./skulptRunner";
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import {useEffect, useState} from 'react';
import {Button} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const CodeEditorWrapper = styled.div`
  color: #282c34;
`

const ButtonText = styled.span`
  margin: 0.25rem 0 0 0.5rem;
`

const outputElementId = 'output'

const OutputWindow = styled.pre.attrs(() => ({id: outputElementId}))`
  background: #fff;
  height: 150px;
  padding: 0.5rem;
  font-size: 16px;
  overflow-wrap: break-word;
`

const CodeWindow = styled(CodeMirror)`
  margin-bottom: 1rem;
  font-size: 16px;
`

const runCode = (code: string) => {
  // @ts-ignore
  document.getElementById(outputElementId).innerHTML = ""
  runit(code, outputElementId)
}

interface CodeEditorProps {
  initialCode: string
}

const CodeEditor = (props: CodeEditorProps) => {
  const [code, setCode] = useState(props.initialCode)

  useEffect(() => setCode(props.initialCode),[props])


  return (
    <>
      <CodeEditorWrapper>
        <CodeWindow
          value={code}
          height="250px"
          extensions={[python()]}
          onChange={value => setCode(value)}
        />
        <Button variant="outlined" onClick={() => runCode(code)}>
          <PlayCircleOutlineIcon/>
          <ButtonText>
            Kjør
          </ButtonText>
        </Button>
        <OutputWindow/>
      </CodeEditorWrapper>
    </>
  )
}

export default CodeEditor