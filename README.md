# 实现简单的 React-router-6

## 项目初始化

```bash
yarn create vite mini-react-router-6 && cd mini-react-router-6
yarn install
yarn add react-router-dom@6
yarn dev
```

mini-react-router 目录在 src/mini-react-router

需要在页面上查看每小节演示，修改 main.jsx 中导入的文件即可

## 简单使用 React-Router-6

使用 React-Router-6 的功能实现页面的切换

1. 查看源文件/src/0.app.jsx
2. 使用了 react-router-dom 中导入的 BrowserRouter，Routes，Route 三个 Component
3. Routes 替代原来 react-route-5 里面的 Switch
4. Route 上使用 element 属性替代 5 里面的 component
5. Route 嵌套路由的时候子路由不需要再补全父路由的路径了
6. Outlet 使用在父路由的 component 里面，用来标记子路由渲染的位置，相比 5 现在父子路由的内容可以共存了
7. 要使用 Link 和 NavLink 之外的元素做跳转的时候使用 useNavigate 这个 hook 函数返回的函数即可
8. Navigate 元素替换原来的 Redirect 元素，直接跳转
