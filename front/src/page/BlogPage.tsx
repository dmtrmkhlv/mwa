import Layout from "../modules/layout/Layout";
import { Blog } from "../modules/components/Blog/Blog";
import { PageProps } from "../interfaces";
import { FC } from "react";

export const BlogPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <Blog />
    </Layout>
  );
};
