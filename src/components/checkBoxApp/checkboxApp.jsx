import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import { filterDocuments } from '../../actions/actions';
import { useDispatch } from 'react-redux';

const CheckboxApp = (props) => {

    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    //in case we clicked the reset button
    useEffect(() => {
        if (props.filters.length === 0) {
            setChecked(false);
        }
    }, [props.filters])

    const onChange = (e) => {
        setChecked(e.target.checked);
        dispatch(filterDocuments(props.nameFilter, e.target.checked));
    }

    return (
        <Checkbox checked={checked} onChange={onChange}>
            {props.label}
        </Checkbox>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.tableReducer.filters,
    }
};

export default connect(mapStateToProps)(CheckboxApp);