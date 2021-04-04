import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  repositoryName: "",
  starsUrl: "",
  commitsUrl: "",
  avatar: "",
  userLogin: "",
  linkToGithub: "",
  languagesUrl: "",
  decription: "",
  isLoading: false,
  errors: "",
};

const repositoryPage = handleActions(
  {
    [actions.GET_REPOSITORY_INFO_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_REPOSITORY_INFO_SUCCESS]: (state, { payload }) => {
      const { name, owner, description } = payload.response;

      return {
        ...state,
        isLoading: false,
        repositoryName: name,
        avatar: owner.avatar_url,
        userLogin: owner.login,
        linkToGithub: owner.html_url,
        decription: description,
      };
    },
    [actions.GET_REPOSITORY_INFO_FAIL]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response,
      };
    },
    [actions.GET_REPOSITORY_ADDITIONAL_INFO_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_REPOSITORY_ADDITIONAL_INFO_SUCCESS]: (state, { payload }) => {
      const { stargazers_count, created_at } = payload.response;

      return {
        ...state,
        isLoading: false,
        starsUrl: stargazers_count,
        commitsUrl: created_at,
      };
    },
    [actions.GET_REPOSITORY_ADDITIONAL_INFO_FAIL]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response,
      };
    },
    [actions.GET_REPOSITORY_LANGUAGES_INFO_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_REPOSITORY_LANGUAGES_INFO_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        languagesUrl: payload.response,
      };
    },
    [actions.GET_REPOSITORY_LANGUAGES_INFO_FAIL]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response,
      };
    },
  },
  defaultState
);

export default repositoryPage;
