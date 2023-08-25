import React from 'react';
import { Layout, Space } from 'antd';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
const { Header} = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#145FA2',
};

const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[10, 48]}
  >
    <Layout>
      <Header style={headerStyle}> Options Trading Simulator </Header>
      <MainPage/>
    </Layout>
  </Space>
);
export default App;