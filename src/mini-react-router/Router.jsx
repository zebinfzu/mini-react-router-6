import { NavigationContext } from "./Context";

// 跨组件层级传递数据 context
export default function Router({ navigator, children }) {
  let navigationContext = { navigator };
  return (
    <NavigationContext.Provider value={navigationContext}>
      {children}
    </NavigationContext.Provider>
  );
}
