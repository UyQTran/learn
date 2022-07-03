import { useState } from 'react'

declare const Sk: any

const usePythonCompiler: (initialOutput?: string) => [string, (code: string) => void, () => void] = (initialOutput = '') => {
    const [output, setOutput] = useState(initialOutput)

    const handleOutput = (nextOutput: string) => {
        setOutput(nextOutput)
    }

    const builtinRead = (fileName: string) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][fileName] === undefined)
            throw "File not found: '" + fileName + "'"
        return Sk.builtinFiles["files"][fileName]
    }

    const resetOutput = () => setOutput('')

    const compile = (code: string) => {
        Sk.configure({output:handleOutput, read:builtinRead, __future__: Sk.python3})
        const myPromise = Sk.misceval.asyncToPromise(function() {
            return Sk.importMainWithBody("<stdin>", false, code, true)
        })
        myPromise.then(function() {
              console.log('success')
          },
          function(err: Error) {
              handleOutput(err.toString()+'\n')
          })
    }

    return [output, compile, resetOutput]
}

export default usePythonCompiler
