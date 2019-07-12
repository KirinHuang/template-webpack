import { printLog } from './module.a';

printLog();

if (module.hot) {
    module.hot.accept('./module.a', () => {
        console.log('main.js is updated');
        printLog();
    });
}
