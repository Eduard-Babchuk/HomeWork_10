const fs = require('fs')
const readline = require('readline')

const inputFilePath = 'ImRobot_In.txt'
const outputFilePath = 'ImRobot_Out.txt'

let wordCount = 0

const reader = readline.createInterface({
    input: fs.createReadStream(inputFilePath, { encoding: 'latin1' }),
    output: process.stdout,
    terminal: false
})

const writer = fs.createWriteStream(outputFilePath, { encoding: 'latin1' })

reader.on('line', (line) => {
    const words = line.split(' ')
    const modifiedWords = words.map((word, index) => {
        if ((index + 1) % 3 === 0) {
            return word.toUpperCase()
        } else {
            return word
        }
    })
    writer.write(modifiedWords.join(' ') + '\n')
})

reader.on('close', () => {
    console.log('File processing complete.')
    writer.end()
})