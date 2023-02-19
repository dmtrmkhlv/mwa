import {
  HorizontalLinearStepper,
  MultiActionAreaCard,
  NavigationEvent,
} from "../modules";
import { FC } from "react";
import { PageProps } from "../interfaces";
import Layout from "../modules/layout/Layout";
import happy_brthd from "../modules/components/images/happy_brthd.jpg";

export const GiftPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <MultiActionAreaCard images={happy_brthd} />
    </Layout>
  );
};
