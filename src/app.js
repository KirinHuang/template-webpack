	
// @flow
import { printLog } from './example/module.a'

// $flow-disable-line
module.hot.accept('./example/module.a', () => {
    console.log('module.a is hot updated')
})

export default printLog
