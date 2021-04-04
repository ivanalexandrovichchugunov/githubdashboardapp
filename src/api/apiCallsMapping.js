import * as repositoriesPageActions from "../pages/RepositoriesPage/actions";
import * as repositoriesPageApi from "../pages/RepositoriesPage/api";

import * as repositoryPageActions from "../pages/RepositoryPage/actions";
import * as repositoryPageApi from "../pages/RepositoryPage/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [repositoriesPageActions.GET_GITHUB_REPOSITORIES_REQUEST]:
      repositoriesPageApi.getAllRepositories,

    [repositoriesPageActions.GET_SEARCHED_REPOSITORIES_REQUEST]:
      repositoriesPageApi.searchRepositoriesByName,

    [repositoryPageActions.GET_REPOSITORY_INFO_REQUEST]:
      repositoryPageApi.getRepositoryById,

    [repositoryPageActions.GET_REPOSITORY_ADDITIONAL_INFO_REQUEST]:
      repositoryPageApi.getRepositoryAdditionalInfo,

    [repositoryPageActions.GET_REPOSITORY_LANGUAGES_INFO_REQUEST]:
      repositoryPageApi.getRepositoryLanguagesInfo,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw "Not mapped action";
  }

  return mapping[action.type];
};

export default apiCallsMapping;
