import styled from "styled-components";
import runit from "./skulptRunner";
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { useState } from "react";
import {Button} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

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
  word-break: break-word;
`

const CodeWindow = styled(CodeMirror)`
  margin-bottom: 1rem;
  font-size: 16px;
`

const outputElementId = 'output'
const runCode = (code: string) => {
  // @ts-ignore
  document.getElementById(outputElementId).innerHTML = ""
  runit(code, outputElementId)
}

const CodeEditor = () => {
  const testCode = `
x = 50
y = 20
print(x + y)
`.trim()
  const [code, setCode] = useState(testCode)


  return (
    <>
      <CodeEditorWrapper>
        <CodeWindow
          value={code}
          height="250px"
          extensions={[python()]}
          onChange={(value) => {
            setCode(value)
            console.log(value)
          }}
        />
        <Button variant="outlined" onClick={() => runCode(code)}>
          <PlayCircleOutlineIcon/>
          <ButtonText>
            Kjør
          </ButtonText>
        </Button>
        <OutputWindow id={outputElementId}></OutputWindow>
      </CodeEditorWrapper>
    </>
  )
}

export default CodeEditor