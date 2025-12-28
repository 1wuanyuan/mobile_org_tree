# Mobile Org node 18

## Introduction 

移动端组织架构数据选择方案，包括组织机构、角色以及人员等分类，支持单选、多选、关键字段自定义以及多种事件及插槽等，适用于大部分组织选人场景。

- 支持懒加载回调，点击获取当前组织下的子组织及人员等
- 支持单选、多选、必选等条件限制
- 支持自定义子节点、key 值、头像等字段
- 支持自定义可选类型
- 多事件绑定类型，实现全生命周期全监测
- 多部位插槽，支持默认样式以及快速实现定制化

## Modules

<div align="center">
<img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a05b1cc5d40e4e38bf4c9b9f7c6f63e4~tplv-k3u1fbpfcp-watermark.image?" />
</div>

## Instructions

<div align="center">
<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/514adc66365b4222a44d64918aba704b~tplv-k3u1fbpfcp-watermark.image?" />
</div>

## Functional demonstration

| ![单选.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f16e248bc15f431180c629b04f9e1b62~tplv-k3u1fbpfcp-watermark.image?) | ![多选.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebb8bc179c314d778783a1eab3d680c5~tplv-k3u1fbpfcp-watermark.image?) | ![搜索.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b94683246aa547f4aeba17420c673e11~tplv-k3u1fbpfcp-watermark.image?) |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
|                                                               单选                                                               |                                                               多选                                                               |                                                               搜索                                                               |

## Links

- [Online Demo](https://mobile-org-tree.vercel.app/)
  <!--  - [Online Docs](https://stefan-ysh.github.io/mobile_org_tree/) -->
  <!--  - [Download](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/stefan-ysh/mobile_org_tree_git/blob/gh-pages/MobileOrg.vue) -->

## Attributes

| prop              | type    | options      | default                 | description                                                                |
| :---------------- | :------ | :----------- | :---------------------- | :------------------------------------------------------------------------- |
| data              | Array   | 一           | []                      | 渲染数据源                                                                 |
| value             | Array   | 一           | —                       | v-model 绑定值（已选择项数组）；提供后将优先于 selectedList                |
| label             | String  | 一           | name                    | 展示字段名称                                                               |
| nodeKey           | String  | 一           | id                      | 数据 key(如: id)                                                           |
| children          | String  | 一           | children                | 子节点的字段名称                                                           |
| icon              | String  | 一           | avatar                  | 头像的字段名称                                                             |
| isShowClearBtn    | Boolean | 一           | true                    | 是否显示搜索框右侧的清除按钮                                               |
| isShowIcon        | Boolean | 一           | false                   | 是否显示图标                                                               |
| defaultIcon       | String  | 一           | 一                      | 默认图标，本地图片引用：`:defaultIcon="require('@/assets/demo/icon.jpg')"` |
| checkboxStyle     | String  | round/square | round                   | 复选框显示样式，正方形 square 或圆形 round                                 |
| isMultiple        | Boolean | 一           | true                    | 是否多选                                                                   |
| selectTypes       | Array   | 一           | ['user', 'org', 'role'] | 可选项，user 用户，org，组织部门，role 角色                                |
| isSelectRequired  | Boolean | 一           | true                    | 是否必选                                                                   |
| invalidSelectText | String  | 一           | 未做任何选择，请选择后重试。 | 必选校验失败时提示文案（配合 `useNativeAlert` 或 `on-submit-invalid`）   |
| useNativeAlert    | Boolean | 一           | false                   | 必选校验失败时是否使用 `alert()` 提示（更推荐监听 `on-submit-invalid` 自行提示） |
| selectedList      | Array   | 一           | []                      | 已经选择的数据，可用作回显                                                 |
| slideDistance     | Number  | 一           | 100                     | 滑动手时触发距离                                                           |
| searchPlaceholder | String  | 一           | 搜索                    | 搜索框提示占位符文字                                                       |
| searchDebounce    | Number  | 一           | 0                       | 搜索触发防抖延迟（毫秒），0 表示不启用                                     |
| defaultShowType   | String  | org/role     | org                     | 默认展示类型                                                               |
| orgText           | String  | 一           | 组织                    | 切换按钮 org 文字                                                          |
| roleText          | String  | 一           | 角色                    | 切换按钮 role 文字                                                         |
| submitText        | String  | 一           | 提交                    | 提交按钮文字                                                               |
| cancelText        | String  | 一           | 取消                    | 取消按钮文字                                                               |
| expandRequest      | Function | 一          | —                       | 异步加载下级的请求函数：`(node) => Promise`；用于组件内部 loading/error/回滚闭环（不替代 `on-expand` 事件） |
| navRequest         | Function | 一          | —                       | 异步面包屑/全部导航请求函数：`(nodeOrMinusOne) => Promise`；用于 loading/error/回滚闭环（不替代 `on-nav` 事件） |
| loadingText        | String  | 一           | 加载中...               | 触发异步请求时的默认 loading 文案                                          |
| loadErrorText      | String  | 一           | 加载失败                | 异步请求失败时的默认错误文案                                               |
| retryText          | String  | 一           | 重试                    | 错误状态下重试按钮文案                                                     |
| enableRetry        | Boolean | 一           | true                    | 是否允许在错误状态下显示重试按钮                                           |

## CSS 变量（主题定制）

组件根节点 `.mobile-org` 内置了一组 CSS 变量（默认值与当前样式保持一致）。如需定制颜色/字号等，建议在业务侧覆盖这些变量，而不是直接改组件源码。

示例：

```css
/* 覆盖 MobileOrg 主题（示例） */
.mobile-org {
  --mo-primary: #5284ea;
  --mo-link: #409eff;
  --mo-border-color: #eee;
  --mo-font-size: 20px;
  --mo-font-size-sm: 15px;
}
```

支持的变量（组件内默认定义）：

- `--mo-font-size` / `--mo-font-size-sm`
- `--mo-radius-pill` / `--mo-radius-sm`
- `--mo-border-color` / `--mo-border-color-soft`
- `--mo-text-muted` / `--mo-text-muted-strong`
- `--mo-bg`
- `--mo-primary` / `--mo-link`
- `--mo-checkbox-checked`
- `--mo-action`
- `--mo-selected-bg` / `--mo-selected-border` / `--mo-selected-text`
- `--mo-clear-bg` / `--mo-clear-text`

## Events

| name                | description                            | parameter     | remark                 |
| :------------------ | :------------------------------------- | :------------ | :--------------------- |
| on-select           | 点击选项时触发，返回当前点击的选项信息 | item          | —                      |
| on-submit           | 提交时触发，返回所有已选项             | selectedItems | —                      |
| on-submit-invalid   | 提交失败时触发（如必选但未选）         | payload       | payload 含 message/reason |
| input               | v-model 更新事件                        | selectedItems | 等同于当前已选项数组     |
| update:selectedList | selectedList.sync 更新事件（可选）     | selectedItems | 等同于当前已选项数组     |
| on-cancel           | 点击取消按钮时候触发，可用来关闭组件等 | —             | —                      |
| on-search           | 搜索框输入时候触发                     | searchKey     | —                      |
| on-expand           | 点击下级时候触发                       | currentNode   | —                      |
| on-nav              | 点击面包屑导航时触发                   | currentNode   | 返回 `-1` 时为点击全部 |
| on-clear            | 点击清除搜索框时候触发                 | —             | —                      |
| on-slide            | 滑动手势触发的事件                     | —             | —                      |
| on-switch-show-type | 点击切换显示类型按钮触发               | showType      | —                      |
| change              | 选中项变化时触发（推荐）               | payload       | payload 含 selectedItems/action/sourceItem |
| on-load-start        | 异步加载开始时触发（expand/nav）       | payload       | `{ action: 'expand'|'nav', arg }` |
| on-load-end          | 异步加载成功结束时触发                 | payload       | `{ action, arg }` |
| on-load-error        | 异步加载失败时触发（会自动回滚面包屑） | payload       | `{ action, arg, error }` |

推荐接入方式：

- **受控（推荐）**：使用 `v-model`（`value` + `input`），或监听 `change` 事件统一处理选中项变化。
- **行为事件**：`on-select` 只在用户点击列表项时触发（删除已选不触发）。
- **触发顺序**：用户点击选中/取消选中时，先触发 `input` / `update:selectedList` / `change`，随后触发 `on-select`。
- **change payload**：`{ selectedItems, action: 'select'|'deselect'|'delete', sourceItem }`。

## Slots

| name                 | description            | parameter     |
| :------------------- | :--------------------- | :------------ |
| switch-show-type-btn | 切换显示类型按钮插槽   | showType      |
| content-area         | 中间内容区             | renderData    |
| empty-tips           | 无数据时提示信息       | —             |
| selected-list        | 已经选择项的集合展示区 | selectedItems |
| result-area          | 底部操作区             | selectedItems |

## Install

## Node 版本说明（重要）

本项目基于 Vue CLI 4 / Webpack 4，**推荐使用 Node 18 LTS** 进行安装与构建。

我们在本项目上遇到过以下现象（通常发生在较新的 Node 版本上，例如 Node 22）：

- `npm ci` 报 `Invalid Version:`（arborist/semver 相关）
- `npm install` 后依赖目录损坏（例如 `node_modules/color-name` 目录存在但缺 `package.json`），进而在构建时报 `Cannot find module 'color-name'`
- `npm install` 报 `ENOTEMPTY rename` 等异常（多见于中断/损坏的 node_modules）

推荐的解决步骤：

```bash
# 1) 切换到 Node 18
source ~/.nvm/nvm.sh
nvm use 18

# 2) 清理并重装依赖（避免损坏的 node_modules/lockfile）
rm -rf node_modules package-lock.json
npm install
```

```shell
npm install mobile-org -S
```

## Quick Start

```javascript
import Vue from "vue";

// import mobile-org component
import MobileOrg from "mobile-org";
// import mobile-org style file
import "mobile-org/mobile-org.css";

Vue.use(MobileOrg);
```

## Development & Publish

本仓库同时包含：

- **Demo 应用**（`npm run dev` / `npm run build` 输出到 `dist/`）
- **组件库产物**（`npm run build:lib` 输出到 `npm-package/`）

常用命令：

```bash
# 本地开发 demo
npm run dev

# 构建 demo
npm run build

# 构建组件库（产物输出到 npm-package/）
npm run build:lib
```

发布到 npm（标准流程）：

```bash
# 1) 登录 npm（仅首次需要）
npm login

# 2) bump 版本（会触发 scripts/version 自动同步 npm-package/package.json）
npm version patch  # 或 minor/major

# 3) 构建并发布（会执行 build:lib + 同步 npm-package 元信息 + npm publish ./npm-package）
npm run publish:npm
```

说明：

- `npm run prepare:package` 会运行 [scripts/sync-npm-package.js](scripts/sync-npm-package.js) 来生成/更新 `npm-package/package.json`，并把根 README 同步到 `npm-package/README.md` 以避免文档漂移。

<!-- ### 手动注册

1. 将下载的组件 `MobileOrg.vue` 复制到项目组件目录中，如：

   ```bash
   MobileOrgOrg
    ├── src
    │   ├── App.vue
    │   ├── components
    │   │   └── MobileOrg
    │   │       └── MobileOrg.vue
    │   └── main.js
    └── vue.config.js
````

2. 在需要用到该组件处引入：

   ```javascript
   import MobileOrg from "@/components/MobileOrg/MobileOrg";
   ```

3. 注册组件：

   ```html
   <script>
     export default {
       components: {
         MobileOrg,
       },
     };
   </script>
   ```

### `Vue` 全局注册

1. 在组件文件夹下创建一个 `index.js` ，如：

   ```bash
   MobileOrgOrg
    ├── src
    │   ├── App.vue
    │   ├── components
    │   │   └── MobileOrg
    │   │       ├── MobileOrg.vue
    │   │       └── index.js
    │   └── main.js
    └── vue.config.js
   ```

2. 在 `index.js` 中写入如下代码：

   ```javascript
   import MobileOrgCpt from "./MobileOrg.vue";

   const MobileOrg = {
     install: function (Vue) {
       Vue.component("MobileOrg", MobileOrgCpt);
     },
   };

   export default MobileOrg;
   ```

3. 在 `main.js` 中进行全局注册：

   ```js
   import MobileOrg from "./components/MobileOrg";

   Vue.use(MobileOrg);
   ```

4. 注册后即可在全局任意位置使用 -->

### Demo

```html
<MobileOrg
  :data="data"
  label="name"
  children="children"
  icon="avatar"
  :isMultiple="true"
  :selectedList="selectedList"
  @on-submit="handleSubmit"
  @on-search="handleSearch"
  @on-expand="handleExpand"
  @on-nav="handleNav"
  @on-clear="clearSearchKey"
  @on-switch-show-type="handleSwitchShowType"
>
  <!-- 此处示例插槽只做展示，非必需，如无特殊需求，不建议使用。 -->
  <!-- 切换显示类型按钮插槽 -->
  <template slot="switch-show-type-btn" slot-scope="scope">
    通过 scope.showType 来获取切换的显示类型
  </template>

  <!-- 内容区插槽 -->
  <template slot="content-area" slot-scope="scope">
    通过 scope.renderData 来获取显示区数据
  </template>

  <!-- 无数据提示信息插槽 -->
  <template slot="empty-tips"> 暂无数据 </template>

  <!-- 底部已选项展示区插槽 -->
  <template slot="selected-list" slot-scope="scope">
    通过 scope.selectedItems 来获取已选项数据
  </template>

  <!-- 底部操作区插槽 -->
  <template slot="result-area" slot-scope="scope">
    通过 scope.selectedItems 来获取已选项数据
  </template>
</MobileOrg>
```

## Function realization

### 数据渲染

> 将 `data` 绑定对应数据即可

```js
// 需将数据转换为以下结构(以组织部分代码为例), name 和 id 可通过 prop 属性进行自定义
[
  {
    name: "研发部",
    id: "3zs96s5ddds2c4f1re5",
    children: [],
    type: "org",
    avatar: "",
  },
  {
    name: "人事部",
    id: "5ef2eo2qwh56yil15wa",
    avatar: "",
    type: "org",
    children: [
      {
        name: "培训组",
        id: "a3s5d21v4forut96521",
        avatar: "",
        type: "org",
        children: [
          {
            name: "张晓丽",
            id: "3a6s5d2f8d555e4r1fp",
            type: "user",
            avatar: "",
          },
        ],
      },
      {
        name: "赵海",
        id: "a8s5d4c111d4f5e2f3s",
        type: "user",
        avatar: "",
      },
    ],
  },
];
```

### 获取下级数据

> 1. 通过 `on-expand` 事件来获取当前级信息
> 2. 通过当前级 `id` 或其他标识来请求下级信息并将返回值赋值给 `data`

### 单选/多选

> 通过给 `isMultiple` 绑定 `false` 或 `true 来实现单选/多选

### 提交数据

> 通过 `on-submit` 绑定的事件来获取已选项信息

### 搜索数据

> 通过 `on-search` 事件来获取搜索关键字并作出对应操作

### 清空搜索关键字

> 1. 通过 `on-clear` 事件来清空搜索关键字
> 2. 重新获取数据并赋值给 `data`

### 切换显示类型

> 1. 通过 `on-switch-show-type` 事件来切换显示类型
> 2. 根据显示类型获取对应的数据
> 3. 将获取的数据赋值给 `data`

### 点击导航

> 1. 通过 `on-nav` 事件获取当前点击的导航信息
> 2. 根据导航信息来获取对应的数据
> 3. 将获取的数据赋值给 `data`
> 4. 接收参数为 `-1` 时，表示当前点击的为 `全部`

<a href="#">:rocket: Top</a>

<!--## Publish

1. `npm mobile-org`

2. `cd npm-package`

3. copy `README.md` to `npm-package`

4. `npm login`

5. `npm publish` -->
