# react-all

模板项目，用于快速开始使用React及React官方或推荐库开发建站。

## 架构特性

单页面应用，前端渲染页面组件、控制路由。使用react、react-router、redux，结合webpack。

## 构建和启动命令

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start

# build for production
npm run build

# run tests
npm run test
```

详见[]()。

## 文件结构

| Path | Content |
| :--- | :--- |
| /src | 源码。 |
| /src/index.js | 主入口。 |
| /src/App.js | 主组件。 |
| /src/components | 组件。 |
| /src/store | Redux状态存储。 |
| /public | 公共文件。 |
| /public/index.html | 页面模板。 |
| /config | 构建配置。 |
| /scripts | 构建脚本和测试脚本。 |

## 快速开发

可参考示例代码进行组件、路由、状态数据的快速开发。

![](./readme_assets/demo.gif)

### 组件

组件的编写方式主要分两种，function型和class型。

### 路由

路由使用react-router。

* 使用BrowserRouter在最外层包装
* 使用Link作为路由链接
* 使用Route作为路由视图容器
* 使用withRouter包装（某一Route内部的子）组件、在其props中注入location、match和history对象
* 使用exact属性精准匹配路由路径
* 使用Redirect实现路由重定向

### 状态数据

状态使用Redux管理。

一般情况下的父子组件通信请使用props；非父子关系的复杂的组件间通信以及状态管理，可以使用状态管理器。React社区生态中，Mobx和Redux是两个能与React完美结合的状态管理器。Mobx偏向面向对象思想，基于观察者模式；Redux偏向函数式思想，基于事件发布订阅模式，借鉴Flux，严格的单向数据流。

建议使用Redux，因为Redux下的代码有更好的可调试性、可扩展性、可维护性。

* 在actions中编写action，action负责把数据传入store，因此每个action包含type和payload
* 异步action需要依靠action中间件，并通过applyMiddleware生成enhancer，详细参考[异步Action](http://cn.redux.js.org/docs/advanced/AsyncActions.html)
* 在reducers中编写reducer，reducer负责描述state的变化且每次返回新的state（不修改state），因此reducer是纯函数
* reducer需要良好组合，参考[组织Reducer](http://cn.redux.js.org/docs/recipes/StructuringReducers.html)
* action和reducer需要平衡，参考[如何将逻辑在 reducer 和 action 创建函数之间划分？ “业务逻辑” 应该放在哪里？](http://cn.redux.js.org/docs/faq/CodeStructure.html#structure-business-logic)
* Redux官方曾推荐将根组件包装在`<Provider store={store}>`中，让react-redux传递store

尽管已有如此优秀的状态管理器的实现，仍有必要在一些情况下考虑使用简单的EventBus（事件中心），使用发布订阅模式，达到简单的事件、通信的目的。事件机制并不违背React的思想。谨记使用setState修改组件状态。

## 本地开发和测试



## 常用特性速查参考

| 特性 | 示例 |
| ：---： | ：--- |
| -- | -- |
