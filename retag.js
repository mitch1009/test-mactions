const {exec} = require('child_process')

exec(`npm version patch -m \"Upgrade to %s from $npm_package_version \"`,(error, stdout, stderr)=> {
    if(error) console.log(error)
    if (stderr) console.log(stderr)
    console.log(stdout)
})
