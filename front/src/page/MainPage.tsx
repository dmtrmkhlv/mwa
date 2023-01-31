import { FC } from "react";
import { PageProps } from "../interfaces";
import { Main } from "../modules";
import Layout from "../modules/layout/Layout";
import { Header } from "../modules/components/Header/Header";
import '../modules/components/MainMaxim/MainPage.css'

export const MainPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <Main />
    </Layout>
  );
};
