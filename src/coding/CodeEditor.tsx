import styled from "styled-components";
import runit from "./skulptRunner";
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { useState } from "react";
import {Button} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";


const CodeEditorWrapper = styled.div`
  color: #000;
`

const ButtonText = styled.span`
  margin: 0.25rem 0 0 0.5rem;
`

const OutputWindow = styled.pre`
  background: #fff;
  width: 100%;
  height: 300px;
`

function CodeEditor() {
  const testCode = `
x = 50
y = 20
print(x + y)
`.trim()

  const [code, setCode] = useState(testCode)


  return (
        <CodeEditorWrapper>
          <CodeMirror
            value={code}
            height="300px"
            extensions={[python()]}
            onChange={(value) => {
              setCode(value)
              console.log(value)
            }}
          />
          <Button variant="outlined" onClick={() => runit(code, 'output')}>
            <PlayCircleOutlineIcon/>
            <ButtonText>
              Kjør
            </ButtonText>
          </Button>
          <OutputWindow id="output"></OutputWindow>
        </CodeEditorWrapper>
  )
}

export default CodeEditor