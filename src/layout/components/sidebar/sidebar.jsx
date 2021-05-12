import React from 'react';
import { Layout, Menu } from 'antd';
import './sidebar.css';
import CheckboxApp from '../../../components/checkBoxApp/checkboxApp';
import { FormattedMessage } from 'react-intl';

const { Sider } = Layout;
const { SubMenu, Item: MenuItem } = Menu;

const Sidebar = (props) => {

    return (
        <Sider className='sider' collapsed={false}>
            <div className="div-filters-text" >Filters</div>
            <Menu defaultSelectedKeys={['1']} mode="inline">
                <MenuItem key="1" icon={null}>
                    <FormattedMessage id="adress" />
                </MenuItem>
                <MenuItem key="2" icon={null}>
                    <FormattedMessage id="date" />
                </MenuItem>
                <SubMenu key="sub1" icon={null} title="Status">
                    <MenuItem key="3">
                        <CheckboxApp nameFilter="Received" label={<FormattedMessage id="received" />} />
                    </MenuItem>
                    <MenuItem key="4">
                        <CheckboxApp nameFilter="Printed" label={<FormattedMessage id="printed" />} />
                    </MenuItem>
                    <MenuItem key="5">
                        <CheckboxApp nameFilter="Folded" label={<FormattedMessage id="folded" />} />
                    </MenuItem>
                    <MenuItem key="6">
                        <CheckboxApp nameFilter="Sorted" label={<FormattedMessage id="sorted" />} />
                    </MenuItem>
                    <MenuItem key="7">
                        <CheckboxApp nameFilter="Delivered" label={<FormattedMessage id="delivered" />} />
                    </MenuItem>

                </SubMenu>
                <MenuItem key="8" icon={null}>
                    <FormattedMessage id="team" />
                </MenuItem>
                <MenuItem key="9" icon={null}>
                    <FormattedMessage id="group" />
                </MenuItem>
                <MenuItem key="10" icon={null}>
                    <FormattedMessage id="dateRange" />
                </MenuItem>
            </Menu>
        </Sider>
    )
}

export default Sidebar;