import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './inputApp.css';
import { Input, Button, Alert } from 'antd';
import { FormattedMessage } from 'react-intl';
import { PlusOutlined } from '@ant-design/icons';
import { addDocument } from '../../actions/actions';

const InputApp = (props) => {

    const [nameDoc, setNameDoc] = useState("");
    const dispatch = useDispatch();

    const onChangeValue = (value) => {
        setNameDoc(value.target.value);
    }

    const onClickAdd = () => {
        dispatch(addDocument(nameDoc));
        setNameDoc("");
    }

    return (
        <>
            <span className="span-docName">
                <FormattedMessage id="docName" />
            </span>
            <Input className="inputApp-style" value={nameDoc} onChange={onChangeValue} />
            <Button className="buttonAddNew-style" type="primary" icon={<PlusOutlined />}
                onClick={onClickAdd} disabled={nameDoc.length == 0} >
                <FormattedMessage id="addNew" />
            </Button >
        </>
    )
}

export default InputApp;