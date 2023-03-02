import { FC } from "react";
import { PageProps } from "../interfaces";
import Layout from "../modules/layout/Layout";
import { Services } from "../modules/components/Services/Services";

export const ServicesPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <Services/>
    </Layout>
  );
};
