// output functions are configurable.  This one just appends some text
// to a pre element.

declare const Sk: any

const getOutCallback = (output: string) => (text: string) => {
    const myPre = document.getElementById(output)
    if(myPre)
        myPre.innerHTML = myPre.innerHTML + text
}

const builtinRead = (fileName: string) => {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][fileName] === undefined)
        throw "File not found: '" + fileName + "'"
    return Sk.builtinFiles["files"][fileName]
}

const runit = (code: string, output: string) => {
    Sk.pre = output
    Sk.configure({output:getOutCallback(output), read:builtinRead, __future__: Sk.python3})
    const myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, code, true)
    })
    myPromise.then(function() {
            console.log('success')
        },
        function(err: Error) {
            getOutCallback(output)(err.toString())
        })
}

export default runit
