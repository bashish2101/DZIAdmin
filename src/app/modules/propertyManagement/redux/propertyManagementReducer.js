import { PropertyManagementMap } from "./propertyManagementAction";

const initialState = {
  isLoading: false,
  propertyDetails: {},
  refreshpropertyDetailsList: true,
  searchBy: "",
  searchText: "",
  searchStatus: "",
  skip: 0,
  column: "",
  dir: "",
  limit: 10,
  addProperty: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PropertyManagementMap.GET_ALL_PROPERTY_DETAIL_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PropertyManagementMap.GET_ALL_PROPERTY_DETAIL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        propertyDetails: action.payload,
        refreshpropertyDetailsList: false,
      };
    }
    case PropertyManagementMap.GET_ALL_PROPERTY_DETAIL_ERROR: {
      return {
        ...state,
        isLoading: false,
        refreshpropertyDetailsList: false,
      };
    }
    case PropertyManagementMap.SEARCH_TEXT_CHANGE: {
      return {
        ...state,
        searchText: action.payload,
      };
    }
    case PropertyManagementMap.SEARCH_STATUS_CHANGE: {
      return {
        ...state,
        searchStatus: action.payload,
        searchBy: "",
        skip: 0,
        refreshpropertyDetailsList: true,
      };
    }
    case PropertyManagementMap.SET_PROPERTY_DETAIL_BATCH_NUMBER: {
      return {
        ...state,
        skip: action.payload,
        refreshpropertyDetailsList: true,
      };
    }
    case PropertyManagementMap.REFRESH_PROPERTY_DETAILS_LIST: {
      return {
        ...state,
        skip: 0,
        refreshpropertyDetailsList: true,
      };
    }
    case PropertyManagementMap.SET_SORT_CHANGE: {
      return {
        ...state,
        searchBy: action.payload?.column,
        dir: action.payload?.dir,
        refreshpropertyDetailsList: true,
      };
    }
    case PropertyManagementMap.ADD_PROPERTY_START: {
      return {
        ...state,
        addProperty: true,
      };
    }
    case PropertyManagementMap.ADD_PROPERTY_SUCCESS: {
      return {
        ...state,
        addProperty: false,
      };
    }
    case PropertyManagementMap.ADD_PROPERTY_ERROR: {
      return {
        ...state,
        addProperty: false,
      };
    }
    default:
      return { ...state };
  }
};
