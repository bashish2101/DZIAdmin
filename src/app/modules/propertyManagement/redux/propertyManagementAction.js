export const PropertyManagementMap = {
  GET_ALL_PROPERTY_DETAIL_START: "GET_ALL_PROPERTY_DETAIL_START",
  GET_ALL_PROPERTY_DETAIL_SUCCESS: "GET_ALL_PROPERTY_DETAIL_SUCCESS",
  GET_ALL_PROPERTY_DETAIL_ERROR: "GET_ALL_PROPERTY_DETAIL_ERROR",
  SET_SORT_CHANGE: "SET_SORT_CHANGE",
  SEARCH_TEXT_CHANGE: "SEARCH_TEXT_CHANGE",
  SEARCH_STATUS_CHANGE: "SEARCH_STATUS_CHANGE",
  REFRESH_PROPERTY_DETAILS_LIST: "REFRESH_PROPERTY_DETAILS_LIST",
  SET_PROPERTY_DETAIL_BATCH_NUMBER: "SET_PROPERTY_DETAIL_BATCH_NUMBER",
  ADD_PROPERTY_START: "ADD_PROPERTY_START",
  ADD_PROPERTY_SUCCESS: "ADD_PROPERTY_SUCCESS",
  ADD_PROPERTY_ERROR: "ADD_PROPERTY_ERROR",
};

export const PropertyManagementActions = {
  getAllPropertyDetailsStart: (data) => ({
    type: PropertyManagementMap.GET_ALL_PROPERTY_DETAIL_START,
    payload: data,
  }),
  getAllPropertyDetailsSuccess: (data) => ({
    type: PropertyManagementMap.GET_ALL_PROPERTY_DETAIL_SUCCESS,
    payload: data,
  }),
  getAllPropertyDetailsError: (errors) => ({
    type: PropertyManagementMap.GET_ALL_PROPERTY_DETAIL_ERROR,
    payload: { errors },
  }),
 
  applyFilters: (data) => ({
    type: PropertyManagementMap.APPLY_FILTERS,
    payload: data,
  }),
  refreshPropertyList: () => ({
    type: PropertyManagementMap.REFRESH_PROPERTY_DETAILS_LIST,
  }),
  searchTextChange: (data) => ({
    type: PropertyManagementMap.SEARCH_TEXT_CHANGE,
    payload: data,
  }),
  searchStatusChange: (data) => ({
    type: PropertyManagementMap.SEARCH_STATUS_CHANGE,
    payload: data,
  }),
  setSort: (data) => ({
    type: PropertyManagementMap.SET_SORT_CHANGE,
    payload: data,
  }),
  setPropertyDetailBatchNumber: (data) => ({
    type: PropertyManagementMap.SET_PROPERTY_DETAIL_BATCH_NUMBER,
    payload: data,
  }),
  addPropertyStart: (data) => ({
    type: PropertyManagementMap.ADD_PROPERTY_START,
    payload: data,
  }),
  addPropertySuccess: (data) => ({
    type: PropertyManagementMap.ADD_PROPERTY_SUCCESS,
    payload: data,
  }),
  addPropertyError: (data) => ({
    type: PropertyManagementMap.ADD_PROPERTY_ERROR,
    payload: data,
  })
};
