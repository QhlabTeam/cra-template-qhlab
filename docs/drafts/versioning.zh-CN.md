# 版本控制方案

技术栈收集

- [semantic-release](https://github.com/semantic-release/semantic-release) 语义化自动发版工具
- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) 语义化提交规范
- [husky](https://github.com/typicode/husky) git提交门禁工具
- [lint-staged](https://github.com/okonet/lint-staged) git暂存区代码校验
- [commitlint](https://github.com/conventional-changelog/commitlint) git提交信息规范校验
- [changesets](https://github.com/changesets/changesets) 根据手动变更日志发版工具

## 基于语义化提交信息的自动发版方案

技术栈选型组合

- [semantic-release](https://github.com/semantic-release/semantic-release) 语义化自动发版工具
- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) 语义化提交规范
- [husky](https://github.com/typicode/husky) git提交门禁工具
- [lint-staged](https://github.com/okonet/lint-staged) git暂存区代码校验
- [commitlint](https://github.com/conventional-changelog/commitlint) git提交信息规范校验

### 原理

根据遵从conventional commits的git提交规范，使用semantic-release工具对提交信息自动解析为对应版本号

### 示例1

当前版本号 `v0.0.1`

提交 `chore: 修改注释`

提交 `fix: 图片显示尺寸问题`

发版 `npx semantice-release`

生成版本号 `v0.0.2`

生成变更日志 `CHANGELOG.md`

```md
## 0.0.2

### Chores
* 修改注释

### Bug Fixes
* 图片显示尺寸问题
```

> 以上示例提交了两次, type为chore和fix, 为非特性提交因此此次发版迭代至 v0.0.2

### 示例2

当前版本号 `v0.0.1`

提交 `style: 优化代码格式`

提交 `feat: 新增鉴权逻辑`

发版 `npx semantice-release`

生成版本号 `v0.1.0`

生成变更日志 `CHANGELOG.md`

```md
## 0.1.0

### Features
* 新增鉴权逻辑

### Styles
* 优化代码格式
```

> 以上示例提交了两次, type为style和feat, 其中feat为特性提交, 因此尽管其中包含了一个非特性提交style，也会采取特性优先的原则升级为v0.1.0

### 门禁

因为该方案需要严格遵从语义化提交这样才能正确对应版本号，所以门禁工具作为开发中必不可少的一环，我们将采用`husky` + `commitlint`的主流组合，该工具集成后无须做口头上的约束，如果项目成员提交了不符合规范的信息将会被门禁工具阻止并给予纠正提示

如

```sh
git add .
git commit -m '随便'
...
⧗   input: 随便
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
husky - commit-msg hook exited with code 1 (error)
```

## 手动变更日志的发版方案

技术栈选型组合

- [changesets](https://github.com/changesets/changesets) 根据手动变更日志发版工具

### 原理

该方案不从git提交信息生成，因此不约束提交信息，而是通过交互式命令行手动新增变更信息，然后发版时将之前添加的变更信息集合后自动生成版本号和变更日志

### 示例1

当前版本号 `v0.0.1`

新增变更信息

```sh
npx changeset
🦋  What kind of change is this for try-changesets-single-package? (current version is 0.0.1) …
❯ patch
  minor
  major
```

```sh
🦋  Summary › 修复图片显示尺寸问题
```

发版 `npx changeset version`

生成版本号 `v0.0.2`

生成变更日志

```md
## 0.0.2

### Patch Changes

- 修复图片显示尺寸问题
```

## 基础架构和业务项目分开发版方案

业务项目克隆自基础架构仓库，因此如果基础架构也采用以上方案发版将会和业务项目的版本号冲突，因此基础架构采用手动发版以commit message的形式标记，不推送tag，这样方便回退时找到对应架构版本号，也不会对业务线版本造成影响

## 总结

优先推荐使用 [基于语义化提交信息的自动发版方案](#基于语义化提交信息的自动发版方案)

该方案能更好的约束团队成员编写有意义的git提交信息 同时能自动发版和生成变更日志 避免了因人为原因疏忽导致忘记记录版本的情况发生

Qhlab 团队已在以下基建项目中使用该方案：

- [qhlab-eslint-plugin](https://github.com/QhlabTeam/qhlab-eslint-plugin)
- [qhlab-library-template](https://github.com/QhlabTeam/qhlab-library-template)
