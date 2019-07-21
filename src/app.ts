import { printLog } from './example/module.a';
import './example/optional.chaining';

module.hot.accept('./example/module.a', () => {
    console.log('module.a is hot updated');
});

export {
    printLog
};
