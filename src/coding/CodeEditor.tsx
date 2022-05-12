
import styled from "styled-components";
import runit from "./skulptRunner";

const CodeEditorWrapper = styled.div`
  width: 40%;
`

function CodeEditor() {

  const testCode = `
x = 50
y = 20
print(x + y)
`

  runit(testCode, 'output')

  return (
        <CodeEditorWrapper>
          <pre id="output" ></pre>
        </CodeEditorWrapper>
  )
}

export default CodeEditor
