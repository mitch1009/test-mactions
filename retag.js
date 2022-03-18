const {exec} = require('child_process')


async function main () {
    return await exec(`npm version patch -m "Upgrade to %s from $npm_package_version "`, ((error, stdout, stderr) => {
        if(error) console.log(`stdout:${error}`)
        if(stderr) console.log(`stderr: ${stderr}`)
        return stdout
    }))
}

main().then(options => console.log(options))
