# commitlint
## 安装全局工具
``` bash
npm install -g @commitlint/cli @commitlint/config-conventional
npm install -g conventional-changelog-cli
```
## 安装依赖
``` bash
npm install -D commitlint
```

## commit 格式规范
commit message: `<type>`(scope): `<subject>` (注意冒号后面有空格)

type:
- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动
- upgrade： 第三方库升级
- revert：回滚

scope:
改动的范围(可选)

subject：
subject是 commit 目的的简短描述

# CRLF和LF混乱的问题
这个可以交给git去管理
``` bash
#提交时转换为LF，检出时不转换
git config --global core.autocrlf input
#拒绝提交包含混合换行符的文件
git config --global core.safecrlf true
```