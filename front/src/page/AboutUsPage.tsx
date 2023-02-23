import {
    HorizontalLinearStepper,
    MultiActionAreaCard,
    NavigationEvent,
  } from "../modules";
  import { FC } from "react";
  import { PageProps } from "../interfaces";
  import { routing } from "../modules";
  import Layout from "../modules/layout/Layout";
  import happy_brthd from "../modules/components/images/happy_brthd.jpg";
import { AboutUs } from "../modules/components/AboutUs/AboutUs";
  
  export const AboutUsPage: FC<PageProps> = ({ isRequire }) => {
    return (
      <Layout isRequire={isRequire}>
        <AboutUs />
      </Layout>
    );
  };
  