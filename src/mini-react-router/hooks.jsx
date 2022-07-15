import React from "react";
import { NavigationContext } from "./Context";

export function useRoutes(routes) {
  const pathname = window.location.pathname;

  return routes.map((route) => {
    // const match = pathname === route.path || pathname === "/" + route.path;
    const match = pathname.startsWith(route.path);

    // todo children
    console.log("route", pathname, route); //sy-log
    return match ? route.element : null;
  });
}

export function useNavigate() {
  // 跳转
  console.log(React.useContext(NavigationContext));
  const { navigator } = React.useContext(NavigationContext);

  return navigator.push;
}
