import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import './tableApp.css';
import { FormattedMessage } from 'react-intl';
import { Table, Button } from 'antd';
import { resetFilters, setDataDB } from '../../actions/actions';
import { DownOutlined } from '@ant-design/icons';

const TableApp = (props) => {

    const dispatch = useDispatch();
    const [sortedInfo, setSortedInfor] = useState({});
    const pagination = {
        pageSize: 4,
        showTotal: (total, range) => (`${range[0]}-${range[1]} of ${total} documents`)
    }

    useEffect(() => {
        //get data from db.json file
        fetch('http://localhost:3004/documents')
            .then(response => response.json()
            ).then(data => {
                dispatch(setDataDB(data))
            })
            .catch(err => console.log(err))
    }, [])


    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setSortedInfor(sorter);
    };

    const onClickReset = () => {
        dispatch(resetFilters())
    }

    const columns = [
        {
            title: <FormattedMessage id="channel" />,
            dataIndex: 'channel',
            key: 'channel',
            ellipsis: true,
            width: 100,
        },
        {
            title: <FormattedMessage id="documentName" />,
            dataIndex: 'documentName',
            key: 'documentName',
            ellipsis: true,
            render: (text) => <a>{text}</a>,
        },
        {
            title: <FormattedMessage id="group" />,
            dataIndex: 'group',
            key: 'group',
            sorter: (a, b) => {
                if (a.group < b.group) return -1
                if (a.group > b.group) return 1
                return 0
            },
            sortOrder: sortedInfo.columnKey === 'group' && sortedInfo.order,
            ellipsis: true,
            render: (text) => <a>{text}</a>,
            width: 200,
        },
        {
            title: <FormattedMessage id="status" />,
            dataIndex: 'status',
            key: 'status',
            sorter: (a, b) => {
                if (a.status < b.status) return -1
                if (a.status > b.status) return 1
                return 0
            },
            sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
            ellipsis: true,
            width: 200,
        },
        {
            title: <FormattedMessage id="dateModified" />,
            dataIndex: 'dateModified',
            key: 'dateModified',
            sorter: (a, b) => {
                if (a.dateModified < b.dateModified) return -1
                if (a.dateModified > b.dateModified) return 1
                return 0
            },
            sortOrder: sortedInfo.columnKey === 'dateModified' && sortedInfo.order,
            ellipsis: true,
            width: 200,
        },
        {
            title: <FormattedMessage id="type" />,
            dataIndex: 'type',
            key: 'type',
            sorter: (a, b) => {
                if (a.type < b.type) return -1
                if (a.type > b.type) return 1
                return 0
            },
            sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
            ellipsis: true,
            width: 200,
        },
        {
            title: <FormattedMessage id="adress" />,
            dataIndex: 'adress',
            key: 'adress',
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