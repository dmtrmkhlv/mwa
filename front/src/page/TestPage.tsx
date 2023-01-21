import { CustomImageList } from "../modules";
import Layout from "../modules/layout/Layout";

export const TestPage = () => {
  return (
    <Layout isRequire={true}>
      <CustomImageList />
    </Layout>
  );
};
