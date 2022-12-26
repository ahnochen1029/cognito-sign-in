
const Amplify = require('aws-amplify')
const { dev } = require('./configs/account')
Amplify.default.configure(dev.config)

async function test() {
  try {
    const { account, password, } = dev.user
    const { signInUserSession: { idToken: { jwtToken } } } = await Amplify.Auth.signIn(account, password)

    console.log(`Bearer ${jwtToken}`)

  } catch (error) {
    console.log(error)
  }
}

test()