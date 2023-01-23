import Layout from "../modules/layout/Layout";
import { FC } from "react";
import { PageProps } from "../interfaces";
import { MainMaxim } from "../modules/components/MainMaxim/MainMaxim";

export const MainMaximPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <MainMaxim />
    </Layout>
  );
};
