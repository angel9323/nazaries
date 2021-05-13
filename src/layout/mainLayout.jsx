import React from 'react';
import 'antd/dist/antd.css';
import './mainLayout.css';
import { Layout } from 'antd';
import Sidebar from './components/sidebar/sidebar';
import HeaderLayout from './components/headerLayout/headerLayout';
import ContentLayout from './components/contentLayout/contentLayout';

const MainLayout = (props) => {
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

export default MainLayout;