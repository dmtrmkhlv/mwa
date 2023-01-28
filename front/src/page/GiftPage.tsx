import {
  HorizontalLinearStepper,
  MultiActionAreaCard,
  NavigationEvent,
} from "../modules";
import { FC } from "react";
import { PageProps } from "../interfaces";
import Layout from "../modules/layout/Layout";

export const GiftPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <MultiActionAreaCard />
    </Layout>
  );
};
