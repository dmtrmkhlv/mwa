import Layout from "../modules/layout/Layout";
import { PageProps } from "../interfaces";
import { FC } from "react";
import { ConfirmEmailComponent } from "../modules/components/ConfirmEmail/ConfirmEmail";

export const ConfirmEmail: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <ConfirmEmailComponent />
    </Layout>
  );
};
