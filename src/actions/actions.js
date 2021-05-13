export const actionTypes = {
    ADD_DOCUMENT: 'ADD_DOCUMENT',
    SET_DATA_DB: 'SET_DATA_DB',
    FILTER_DOCUMENTS: 'FILTER_DOCUMENTS',
    FILTERS: 'FILTERS',
    RESET_FILTERS: 'RESET_FILTERS',
}

export const setDataDB = (documents) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.SET_DATA_DB,
        payload: { documents }
    })
}

export const addDocument = (nameDoc) => (dispatch, getState) => {
    //adding document
    const key = getState().tableReducer.allDocuments.length + 1;

    const document = {
        id: key,
        key: '' + key,
        channel: 'PDF',
        documentName: nameDoc,
        group: "Receipts",
        status: "Received",
        dateModified: "2021-02-05",
        type: "Prior",
        adress: '/localhost',
    }

    dispatch({
        type: actionTypes.ADD_DOCUMENT,
        payload: { document }
    })

    //adding to filteredDocuments if needed
    const filters = getState().tableReducer.filters;
    const allDocuments = getState().tableReducer.allDocuments;
    let filteredDocuments;
    if (filters.length === 0) {
        filteredDocuments = [...allDocuments];
    } else {
        filteredDocuments = allDocuments.filter(doc => filters.includes(doc.status));
    }

    dispatch({
        type: actionTypes.FILTER_DOCUMENTS,
        payload: { filteredDocuments }
    })
}

export const filterDocuments = (filter, addFilter) => (dispatch, getState) => {
    //setting the new filters
    const filters = getState().tableReducer.filters;
    let newFilters;
    if (addFilter) {
        newFilters = [...filters, filter];
    } else {
        newFilters = filters.filter(element => element !== filter);
    }

    dispatch({
        type: actionTypes.FILTERS,
        payload: { filters: newFilters }
    })

    //filtering the documents
    const allDocuments = getState().tableReducer.allDocuments;
    let filteredDocuments;
    if (newFilters.length === 0) {
        filteredDocuments = [...allDocuments];
    } else {
        filteredDocuments = allDocuments.filter(doc => newFilters.includes(doc.status));
    }

    dispatch({
        type: actionTypes.FILTER_DOCUMENTS,
        payload: { filteredDocuments }
    })
}

export const resetFilters = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.RESET_FILTERS,
    })
}