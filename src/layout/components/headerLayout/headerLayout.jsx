import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { FormattedMessage } from 'react-intl';
import './headerLayout.css';

const { Header } = Layout;
const { Item: BreadcrumbItem } = Breadcrumb;

const HeaderLayout = (props) => {

    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <Breadcrumb className="breadcrumb-style" >
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Documents</BreadcrumbItem>
            </Breadcrumb>
            <div className="div-documentBrowser-text">
                <FormattedMessage id="documentBrowser" />
            </div>
        </Header>

    )
}

export default HeaderLayout;