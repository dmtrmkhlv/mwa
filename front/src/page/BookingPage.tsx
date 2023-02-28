import { BookingEvent } from "../modules";
import { FC } from "react";
import { PageProps } from "../interfaces";
import Layout from "../modules/layout/Layout";

export const BookingPage: FC<PageProps> = ({ isRequire }) => {
  return (
    <Layout isRequire={isRequire}>
      <BookingEvent />
    </Layout>
  );
};
