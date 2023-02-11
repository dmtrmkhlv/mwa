import { FC } from "react";
import { PageProps } from "../interfaces";
import { Main } from "../modules";
import Layout from "../modules/layout/Layout";

export const MainPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <Main />
    </Layout>
  );
};
