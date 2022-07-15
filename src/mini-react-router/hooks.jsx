import React from "react";
import { NavigationContext, RouteContext } from "./Context";
import Outlet from "./Outlet";
import { normalizePathname } from "./utils";
export function useRoutes(routes) {
  const location = useLocation();
  const pathname = location.pathname;

  return routes.map((route) => {
    // const match = pathname === route.path || pathname === "/" + route.path;
    const match = pathname.startsWith(route.path);

    // todo children
    console.log("route", pathname, route); //sy-log
    return (
      match &&
      route.children.map((child) => {
        let m = normalizePathname(child.path) === pathname;

        return (
          m && (
            <RouteContext.Provider
              value={{ outlet: child.element }}
              children={
                route.element !== undefined ? route.element : <Outlet />
              }
            />
          )
        );
      })
    );
  });
}

export function useNavigate() {
  // 跳转
  console.log(React.useContext(NavigationContext));
  const { navigator } = React.useContext(NavigationContext);

  return navigator.push;
}

export function useLocation() {
  const { location } = React.useContext(NavigationContext);
  return location;
}

export function useOutlet() {
  const { outlet } = React.useContext(RouteContext);
  return outlet;
}
