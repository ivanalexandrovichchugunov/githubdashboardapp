import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  repositories: [],
  isLoading: false,
  errors: "",
  searchInputValue: "",
  currentPageId: "",
};

const repositoriesPage = handleActions(
  {
    [actions.GET_GITHUB_REPOSITORIES_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_GITHUB_REPOSITORIES_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      repositories: payload.response,
    }),
    [actions.GET_GITHUB_REPOSITORIES_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    [actions.GET_SEARCHED_REPOSITORIES_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_SEARCHED_REPOSITORIES_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      repositories: payload.response.items,
    }),
    [actions.GET_SEARCHED_REPOSITORIES_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    [actions.UPDATE_INPUT_VALUE]: (state, { payload }) => ({
      ...state,
      searchInputValue: payload,
    }),
    [actions.UPDATE_CURRENT_PAGE_ID]: (state, { payload }) => ({
      ...state,
      currentPageId: payload,
    }),
  },
  defaultState
);

export default repositoriesPage;
