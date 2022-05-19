// output functions are configurable.  This one just appends some text
// to a pre element.

const outf = output => text => {
    const mypre = document.getElementById(output)
    mypre.innerHTML = mypre.innerHTML + text;
}

const builtinRead = (x) => {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'"
    return Sk.builtinFiles["files"][x]
}

const runit = (code, output) => {
    const prog = code
    Sk.pre = output
    Sk.configure({output:outf(output), read:builtinRead, __future__: Sk.python3})
    const myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, prog, true)
    });
    myPromise.then(function(mod) {
            console.log('success')
        },
        function(err) {
            outf(output)(err.toString())
        });
}

export default runit;