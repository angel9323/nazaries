import { data } from './mockedData';
import { actionTypes } from '../actions/actions';

const initialState = {
    allDocuments: [],
    filteredDocuments: [],
    filters: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_DOCUMENT: {
            return {
                ...state,
                allDocuments: [...state.allDocuments, action.payload.document]
            }
        }
        case actionTypes.SET_DATA_DB: {
            return {
                ...state,
                allDocuments: [...action.payload.documents],
                filteredDocuments: [...action.payload.documents],
            }
        }
        case actionTypes.FILTER_DOCUMENTS: {
            return {
                ...state,
                filteredDocuments: [...action.payload.filteredDocuments]
            }
        }
        case actionTypes.FILTERS: {
            return {
                ...state,
                filters: action.payload.filters
            }
        }
        case actionTypes.RESET_FILTERS: {
            return {
                ...state,
                filteredDocuments: [...state.allDocuments],
                filters: []
            }
        }
        default: return state
    }
}