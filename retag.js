const {exec} = require('child_process')


exec(`npm version patch -m "Upgrade to %s from $npm_package_version "`, ((error, stdout, stderr) => {
    if(error) console.log(`stdout:${error}`)
    if(stderr) console.log(`stderr: ${stderr}`)
    console.log("increased version", stdout)
}))

console.log("done")
