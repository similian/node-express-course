const {readFile, writeFile} = require('fs')

console.log('@@@@@@@@@@@@===----start----===@@@@@@@@@@');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
        const second = result
        writeFile(
              './content/result-async.txt'
            , `Here is result: \n ${first}, \n ${second}`
            , (err) => {
                if (err) {
                    console.log(`write: ${err}`)
                }
                console.log('Done with this task');
            })
    })
    console.log('@@@@@@@@@@@@===----end;----===@@@@@@@@@@');
})