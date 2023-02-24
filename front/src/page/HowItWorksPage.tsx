import Layout from "../modules/layout/Layout";
import { HowItWorks } from "../modules/components/HowItWorks/HowItWorks";
import { PageProps } from "../interfaces";
import { FC } from "react";

export const HowItWorksPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <HowItWorks />
    </Layout>
  );
};
