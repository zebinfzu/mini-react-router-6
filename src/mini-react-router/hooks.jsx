import React from "react";
import { matchRoutes } from "react-router-dom";
import { NavigationContext, RouteContext } from "./Context";
import Outlet from "./Outlet";
import { normalizePathname } from "./utils";
export function useRoutes(routes) {
  const location = useLocation();
  const pathname = location.pathname;
  // matchRouters将原来嵌套多层路由的数组用来拍平
  console.log("routes", routes);
  const matches = matchRoutes(routes, { pathname });
  console.log("matches", matches); //sy-log
  return renderMatches(matches);
}

function renderMatches(matches) {
  if (matches === null) {
    return null;
  }
  return matches.reduceRight((outlet, match) => {
    return (
      <RouteContext.Provider
        value={{ outlet, matches }}
        children={match.route.element || outlet}
      />
    );
  }, null);
}

export function useNavigate() {
  // 跳转
  // console.log(React.useContext(NavigationContext));
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

export function useParams() {
  const { matches } = React.useContext(RouteContext);

  const routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
