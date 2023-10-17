import { FC } from "react";
import { PageProps } from "../interfaces";
import Layout from "../modules/layout/Layout";
import { AboutUs } from "../modules/components/AboutUs/AboutUs";

export const AboutUsPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <AboutUs />
    </Layout>
  );
};
