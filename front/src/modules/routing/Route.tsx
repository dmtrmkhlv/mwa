import { Routes, Route as RouteReact } from "react-router-dom";
import { FC } from "react";
import { PageProps, Require } from "../../interfaces";
import { RouteComponents, RouteProps } from "./RouteProps";

export const Route = (props: RouteProps) => {
  const { route } = props;
  return (
    <Routes>
      {route.map((row, index) => {
        let isRequire: Require;
        if (row.isRequire !== undefined) {
          isRequire = row.isRequire;
        } else {
          isRequire = "public";
        }

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

  function getArr() {
    return Arr;
  }
  return { get: getArr(), create: createRoute };
};
