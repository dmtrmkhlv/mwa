import { FC } from "react";
import { PageProps } from "../interfaces";
import { CustomImageList, routing } from "../modules";
import Layout from "../modules/layout/Layout";
import { MainPage } from "./MainPage";

export const TestPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <CustomImageList />
    </Layout>
  );
};
