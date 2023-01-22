import { FC } from "react";
import { PageProps } from "../interfaces";
import { CustomImageList } from "../modules";
import Layout from "../modules/layout/Layout";

export const TestPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <CustomImageList />
    </Layout>
  );
};
