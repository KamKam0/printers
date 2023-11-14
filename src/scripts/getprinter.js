const exec = require('node:child_process')
const os = require('node:os')

module.exports = () => {
    return new Promise((resolve, reject) => {
        if (os.platform() !== 'darwin') {
            return reject('Only macs are supported')
        }
        
        exec.exec('lpstat -t', (err, stdout, stderr) => {
            if (err) {
                return reject(err)
            }

            let printer = stdout
            ?.split(':')?.[1]
            ?.split(' ')?.[1]
            ?.split('\n')?.[0]
            
            if (!printer) {
                return resolve(null)
            }

            return resolve(printer)
        })
    })
}