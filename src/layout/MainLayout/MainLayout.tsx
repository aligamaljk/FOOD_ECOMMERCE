import { Layout } from "antd"
import { Outlet } from "react-router"
import HeaderApp from "../../Components/common/HeaderApp/HeaderApp";
import Footer from "../../Components/common/Footer/Footer";

const { Header, Content, Footer : FooterAnt } = Layout
const MainLayout = () => {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            background: 'transparent',
            position: 'fixed',
            zIndex: 999,
            width: '100%',
            height: '100px',
          }}
        >
          <HeaderApp />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <FooterAnt>
          <Footer />
        </FooterAnt>
      </Layout>
    </>
  );
}

export default MainLayout