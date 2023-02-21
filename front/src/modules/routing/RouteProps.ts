import { FC } from "react";
import { PageProps, Require } from "../../interfaces";

export interface RouteComponents {
  components: FC<PageProps>;
  path: string;
  isRequire: Require;
  describe: string;
}

export interface RouteProps {
  route: RouteComponents[];
}
