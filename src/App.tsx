import { App as AppAnt,ConfigProvider } from 'antd'
import AppRouter from './Routes/AppRouter'
function App() {
  const token = {
    token: {
      colorPrimary: '#2a363f', // color-background button
      colorPrimaryHover: '#000', // background hover button & input
      colorLinkHover: '#fff', // color link
      colorSuccess: '#238709', // color success
      colorSuccessBg: '#E9FFDA', // background success
      colorWarning: '#ff9d00', // color warning
      colorWarningBg: '#FFF4E2', // background warning
      colorError: '#D62828', // color error
      colorErrorBg: '#FFE7E4', // background error
      colorTextBase: '#fff',
      colorFillQuaternary: '#27a0d0', // background table thead & hover table tbody
      colorFillSecondary: '#ede8ff', // background hover sidebar
      colorPrimaryBg: '#ede8ff', // background sidebar
      colorBgLayout: 'transparent', // background layout
      colorBgContainer: '#fff', // background table && card & input
      colorBgElevated: '#fff', // color value select
      fontSizeXL: 18,
      fontSizeHeading5: 16,
      fontSizeHeading4: 18,
      fontSizeHeading3: 22,
      fontSizeHeading2: 25,
      fontSizeHeading1: 32,
      marginMD: 24,
      wireframe: false,
      marginLG: 32,
      marginXL: 40,
      paddingMD: 24,
      paddingLG: 32,
      paddingXL: 40,
      borderRadiusSM: 4,
      borderRadiusLG: 12,
      borderRadiusXS: 4,
      fontSize: 16,
      controlHeight: 40,
      contentFontSize: 16,
      fontWeight: 600,
      borderRadius: 8,
    },
  };
  return (
    <>
      <ConfigProvider theme={token}>
        <AppAnt>
          <AppRouter />
        </AppAnt>
      </ConfigProvider>
    </>
  );
}

export default App
