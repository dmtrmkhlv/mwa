import { Routes, Route as RouteReact } from "react-router-dom";

interface RouteComponents {
  components: () => JSX.Element;
  path: string;
}

interface RouteProps {
  route: RouteComponents[];
}

export const routing = () => {
  let Arr: RouteComponents[] = [];
  function createRoute(components: () => JSX.Element, path: string) {
    Arr.push({ components, path });
  }
  return { get: Arr, create: createRoute };
};

export const Route = (props: RouteProps) => {
  const { route } = props;
  return (
    <Routes>
      {route.map((row, index) => (
        <RouteReact key={index} path={row.path} element={row.components()} />
      ))}
    </Routes>
  );
};
