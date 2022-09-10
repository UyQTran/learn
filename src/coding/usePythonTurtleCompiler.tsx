import { useEffect, useState } from 'react'

declare const Sk: any

const usePythonCompiler: (initialOutput?: string) => [string, (code: string) => void, () => void] = (initialOutput = '') => {
    useEffect(() => {
        import('../../assets/appSettings.json')
          .then((res) => setAssignments(res.default))
          .catch(_ => null)
    }, [])
    const [output, setOutput] = useState(initialOutput)
    let outputCache = output

    const handleOutput = (nextOutput: string) => {
        outputCache += nextOutput
        setOutput(outputCache)
    }

    const builtinRead = (fileName: string) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][fileName] === undefined)
            throw "File not found: '" + fileName + "'"
        return Sk.builtinFiles["files"][fileName]
    }

    const resetOutput = () => setOutput('')

    const compile = (code: string) => {
        outputCache = ''
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
