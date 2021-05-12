import React from 'react';
import 'antd/dist/antd.css';
import './mainLayout.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Sidebar from './components/sidebar/sidebar';
import HeaderLayout from './components/headerLayout/headerLayout';
import ContentLayout from './components/contentLayout/contentLayout';

const { Header, Content, Footer, Sider } = Layout;


class MainLayout extends React.Component {

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar />

                <Layout className="site-layout">
                    <HeaderLayout />
                    <ContentLayout />
                </Layout>
            </Layout>
        )
    }
}

export default MainLayout;