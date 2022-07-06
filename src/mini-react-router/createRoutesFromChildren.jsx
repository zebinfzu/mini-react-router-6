import React from "react";
// 类比DOM->V-DOM，使用一个route对象来描述routes数组
export default function createRoutesFromChildren(children) {
  const routes = [];
  React.Children.forEach(children, (child) => {
    const route = {
      element: child.props.element,
      path: child.props.path,
    };
    routes.push(route);
  });
  return routes;
}
