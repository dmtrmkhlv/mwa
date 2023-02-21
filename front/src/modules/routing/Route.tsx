import { Routes, Route as RouteReact } from "react-router-dom";
import { FC } from "react";
import { PageProps, Require } from "../../interfaces";
import { RouteComponents, RouteProps } from "./RouteProps";

export const routing = () => {
  let Arr: RouteComponents[] = [];
  function createRoute(
    components: FC<PageProps>,
    path: string,
    isRequire: Require,
    describe: string
  ) {
    Arr.push({ components, path, isRequire, describe });
  }
  return { get: Arr, create: createRoute };
};

export const Route = (props: RouteProps) => {
  const { route } = props;
  return (
    <Routes>
      {route.map((row, index) => {
        const isRequire = row.isRequire;
        return (
          <RouteReact
            key={index}
            path={row.path}
            element={row.components({ isRequire })}
          />
        );
      })}
    </Routes>
  );
};
