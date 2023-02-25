import { FC } from "react";
import { PageProps } from "../interfaces";
import Layout from "../modules/layout/Layout";
import { CardGift } from "../modules/components/CardGift";

export const GiftPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <CardGift />
    </Layout>
  );
};
