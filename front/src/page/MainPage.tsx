import { Main } from "../modules";
import Layout from "../modules/layout/Layout";

export const MainPage = () => {
  return (
    <Layout isRequire={true}>
      <Main />
    </Layout>
  );
};
