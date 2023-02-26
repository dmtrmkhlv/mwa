import { ArchiveEvent } from "../modules";
import { FC } from "react";
import { PageProps } from "../interfaces";
import Layout from "../modules/layout/Layout";

export const ArchivePage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <ArchiveEvent />
    </Layout>
  );
};
