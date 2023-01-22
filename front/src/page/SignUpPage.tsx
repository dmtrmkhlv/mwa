import { FC } from "react";
import { PageProps } from "../interfaces";
import { SignUp } from "../modules";
import Layout from "../modules/layout/Layout";

export const SignUpPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <SignUp />
    </Layout>
  );
};
