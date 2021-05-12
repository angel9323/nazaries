import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import './tableApp.css';
import { FormattedMessage } from 'react-intl';
import { Table, Dropdown, Button, Menu } from 'antd';
import { resetFilters, setDataDB } from '../../actions/actions';
import { DownOutlined } from '@ant-design/icons';

const TableApp = (props) => {

    const [sortedInfo, setSortedInfor] = useState({});
    const dispatch = useDispatch();
    const pagination = {
        pageSize: 4
    }

    useEffect(() => {
        //get data from db.json file
        fetch('http://localhost:3004/documents')
            .then(response => response.json()
            ).then(data => {
                dispatch(setDataDB(data))
            });
    }, [])


    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setSortedInfor(sorter);
        // this.setState({
        //     filteredInfo: filters,
        //     sortedInfo: sorter,
        // });
    };

    const clearFilters = () => {
        // this.setState({ filteredInfo: null });
    };

    const clearAll = () => {
        // this.setState({
        //     filteredInfo: null,
        //     sortedInfo: null,
        // });
    };

    const setAgeSort = () => {
        // this.setState({
        //     sortedInfo: {
        //         order: 'descend',
        //         columnKey: 'age',
        //     },
        // });
    };

    const onClickReset = () => {
        dispatch(resetFilters())
    }

    const columns = [
        {
            title: <FormattedMessage id="channel" />,
            dataIndex: 'channel',
            key: 'channel',
            sorter: (a, b) => a.channel.length - b.channel.length,
            sortOrder: sortedInfo.columnKey === 'channel' && sortedInfo.order,
            ellipsis: true,
            width: 100,
        },
        {
            title: <FormattedMessage id="documentName" />,
            dataIndex: 'documentName',
            key: 'documentName',
            sorter: (a, b) => a.documentName - b.documentName,
            sortOrder: sortedInfo.columnKey === 'documentName' && sortedInfo.order,
            ellipsis: true,
            render: (text) => <a>{text}</a>,
        },
        {
            title: <FormattedMessage id="group" />,
            dataIndex: 'group',
            key: 'group',
            sorter: (a, b) => a.group.length - b.group.length,
            sortOrder: sortedInfo.columnKey === 'group' && sortedInfo.order,
            ellipsis: true,
            render: (text) => <a>{text}</a>,
            width: 200,
        },
        {
            title: <FormattedMessage id="status" />,
            dataIndex: 'status',
            key: 'status',
            sorter: (a, b) => a.status.length - b.status.length,
            sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
            ellipsis: true,
            width: 200,
        },
        {
            title: <FormattedMessage id="dateModified" />,
            dataIndex: 'dateModified',
            key: 'dateModified',
            sorter: (a, b) => a.dateModified.length - b.dateModified.length,
            sortOrder: sortedInfo.columnKey === 'dateModified' && sortedInfo.order,
            ellipsis: true,
            width: 200,
        },
        {
            title: <FormattedMessage id="type" />,
            dataIndex: 'type',
            key: 'type',
            sorter: (a, b) => a.type.length - b.type.length,
            sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
            ellipsis: true,
            width: 200,
        },
        {
            title: <FormattedMessage id="adress" />,
            dataIndex: 'adress',
            key: 'adress',
            sorter: (a, b) => a.adress.length - b.adress.length,
            sortOrder: sortedInfo.columnKey === 'adress' && sortedInfo.order,
            ellipsis: true,
            render: (text) => <a>{text}</a>,
            width: 200,
        },
    ];

    const dataSource = props.filteredDocuments;

    return (
        <>
            <div className="div-title-button-table">
                <span className="span-dashBoardText"><FormattedMessage id="dashboard" /></span>
                {/* <span className="span-dateText"><FormattedMessage id="date" /> <DownOutlined /></span> */}
                {/* <Dropdown overlay={<Menu></Menu>} >
                    Date <DownOutlined />
                </Dropdown> */}
                <Button className="buttonReset-style" onClick={onClickReset} ><FormattedMessage id="reset" /></Button>
                <Button className="buttonDate-style" type="text">
                    <FormattedMessage id="date" /><DownOutlined />
                </Button>
            </div>
            <Table pagination={pagination} columns={columns} dataSource={dataSource} onChange={handleChange} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        allDocuments: state.tableReducer.allDocuments,
        filteredDocuments: state.tableReducer.filteredDocuments
    }
};

export default connect(mapStateToProps)(TableApp);