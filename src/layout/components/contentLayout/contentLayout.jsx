import React from 'react';
import { Layout } from 'antd';
import './contentLayout.css';
import InputApp from '../../../components/inputApp/inputApp';
import TableApp from '../../../components/tableApp/tableApp';
import { FormattedMessage } from 'react-intl';

const { Header, Content, Footer, Sider } = Layout;

const ContentLayout = (props) => {

    return (
        <Content className="content-style" >
            <div className="div-inputApp">
                <InputApp />
            </div>
            <div className="div-tableApp">
                <TableApp />
            </div>

        </Content>
    )
}

export default ContentLayout;