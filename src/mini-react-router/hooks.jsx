import { useContext } from "react";
import { NavigationContext } from "./Context";
export function useRoutes(routes) {
  const pathname = window.location.pathname;
  return routes.map((route) => {
    // const match = pathname === route.path || pathname === "/" + route.path;
    const match = pathname.startsWith(route.path);
    // todo 子节点 -> Outlet
    return match ? route.element : null;
  });
}

// 路由跳转函数
export function useNavigate() {
  const { navigator } = useContext(NavigationContext);
  return navigator.push;
}
