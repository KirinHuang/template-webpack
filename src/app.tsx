import App from './example/classComponent';

// 模块热更新测试
import { printLog } from './example/module/module.a';
printLog();
// 在入口文件捕获热更新，在父节点才能捕获子模块的热更新
if (module.hot) {
    module.hot.accept('./example/module/module.a', () => {
        console.log('main.js is updated');
    });
}

export default App;
