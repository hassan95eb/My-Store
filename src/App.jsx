import { Content, Footer, Header } from "antd/es/layout/layout";
import RoutesSite from "./constants/RoutesSite";
import { Layout } from "antd";
import Navbar from "./pages/Navbar";
import FooterSite from "./pages/FooterSite";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header className="flex items-center justify-between">
          <Navbar />
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <RoutesSite />
        </Content>
        <Footer>
          <FooterSite />
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
