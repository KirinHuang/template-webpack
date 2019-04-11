import { printLog } from './module.a'

printLog()

if (module.hot) {
    module.hot.accept('./module.a.js', function () {
        console.log('main.js is updated')
        printLog()
    })
}