import Layout from "../modules/layout/Layout";
import { Login } from "../modules";
import { PageProps } from "../interfaces";
import { FC } from "react";

export const LoginPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <Login />
    </Layout>
  );
};
