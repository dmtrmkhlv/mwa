import Layout from "../modules/layout/Layout";
import { Component404 } from "../modules/components/404/404";
import { PageProps } from "../interfaces";
import { FC } from "react";

export const Page404: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <Component404 />
    </Layout>
  );
};
