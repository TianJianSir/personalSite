import test from './config.test.js'
import production from './config.prod.js'
import development from './config.dev.js'

let config = {
  test,
  development,
  production
}

console.log(process.env.NODE_ENV);

export default config[process.env.NODE_ENV]
