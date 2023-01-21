import Layout from "../modules/layout/Layout";
import { Login } from "../modules";

export const LoginPage = () => {
  return (
    <Layout isRequire={false}>
      <Login />
    </Layout>
  );
};
