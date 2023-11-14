const exec = require('node:child_process')
const fs = require('node:fs')
const os = require('node:os')
const getPrinter = require('./getprinter')

module.exports = (link) => {
    return new Promise(async (resolve, reject) => {
        if (os.platform() !== 'darwin') {
            return reject('Only macs are supported')
        }

        if (typeof link !== 'string') {
            return reject('You did not provide a valid link')
        }

        if (!link.endsWith('.pdf') && !link.endsWith('.txt')) {
            return reject('The file to print has to be .pdf or .txt')
        }

        try {
            await fs.readFileSync(link)
        } catch(err) {
            return reject(err)
        }

        let printerName = await getPrinter().catch(err => {})

        if (!printerName) {
            return reject('Could not find default printer')
        }

        exec.exec(`lp ${link}`, (err, stdout, stderr) => {
            if (err) {
                return reject(err)
            }

            if (!stdout.includes(printerName)) {
                return reject('An error happened')
            }

            return resolve(true)
        })
    })
}