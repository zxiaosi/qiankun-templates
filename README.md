## Qiankun+Vite5+Lerna6

## 依赖问题

### vite 版本问题

`vite@6` 与 `node 16` 不兼容, 所以使用 `vite@5.4.11` 版本, 注意不要带 `^` 符号

```bash
{
  ... // 其他配置
  "devDependencies": {
    ... // 其他依赖
    "vite": "5.4.11"
  }
}
```

### vite-plugin-qiankun 问题

- 子应用安装 `vite-plugin-qiankun` 之后启动项目报错 `ReferenceError: ReadableStream is not defined`

- 解决方案：更改 cheerio 的版本, 详见：[cheerio upgrade problem](https://github.com/cheeriojs/cheerio/issues/3993#issuecomment-2283505868)

- 在 `packages/app/package.json` 下添加下面内容 注意不要带 `^` 符号

```bash
{
  ... // 其他配置
  "devDependencies": {
    ... // 其他依赖
    "cheerio": "1.0.0-rc.12"
  }
}
```

- 最后删除 node_modules 文件夹与 package-lock.json 文件，重新安装依赖 (重要！！！)

## 安装依赖

### 全局安装 `Lerna`

```bash
npm install -g lerna@6
```

### 安装项目依赖

```bash
npx lerna bootstrap
```

## 参考

- [Qiankun+Vite 实现微前端](https://zxiaosi.com/archives/e1569209.html)
