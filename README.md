# Vue3 知识点
- `Vue3 tempalte` 支持 `多个根标签`, `Vue2` 只有一个
- `Vue3` 和 `Vue2`
   ```
   // createApp(组件)
   createApp(App).mount('#app')

   // new Vue({tempalte, render})
   new Vue()
   ``` 


### 命令行
```
// 查看所有版本号
npm info vue-router versions

// 安装对应最新版本
yarn add vue-router@4.0.0-beta.6
```

### QA
1. 找不到模块 `xxx.vue`
   - TS只能理解`.ts`文件, 不能理解 `.vue`
   - 搜索 `vue3 can not find module`
   - 创建`xxx.d.ts`, 告诉 ts 理解 .vue 文件