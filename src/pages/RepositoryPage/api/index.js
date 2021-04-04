import api from "../../../config/apiConfig";

export const getRepositoryById = (repositoryId) =>
  api.get(`/repositories/${repositoryId}`);

export const getRepositoryAdditionalInfo = ({ userName, repositoryName }) =>
  api.get(`/repos/${userName}/${repositoryName}`);

export const getRepositoryLanguagesInfo = ({ userName, repositoryName }) =>
  api.get(`/repos/${userName}/${repositoryName}/languages`);
