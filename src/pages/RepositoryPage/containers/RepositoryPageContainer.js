import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import RepositoryPage from "../components/RepositoryPage/RepositoryPage";
import {
  GET_REPOSITORY_INFO_REQUEST,
  GET_REPOSITORY_ADDITIONAL_INFO_REQUEST,
  GET_REPOSITORY_LANGUAGES_INFO_REQUEST,
} from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const RepositoryPageContainer = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const history = useHistory();

  const {
    repositoryName,
    starsUrl,
    commitsUrl,
    avatar,
    userLogin,
    linkToGithub,
    languagesUrl,
    decription,
    isLoading,
    errors,
  } = useSelector((state) => state.repositoryPage);

  const handleGoToRepositories = useCallback(() => {
    history.push(`${ROUTES.REPOSITORIES}`);
  }, [history]);

  useEffect(() => {
    dispatch(GET_REPOSITORY_INFO_REQUEST(id));
  }, [dispatch, id]);

  useEffect(() => {
    const params = {
      repositoryName,
      userName: userLogin,
    };

    if (repositoryName && userLogin) {
      dispatch(GET_REPOSITORY_ADDITIONAL_INFO_REQUEST(params));
      dispatch(GET_REPOSITORY_LANGUAGES_INFO_REQUEST(params));
    }
  }, [dispatch, repositoryName, userLogin]);

  return (
    <RepositoryPage
      repositoryName={repositoryName}
      starsUrl={starsUrl}
      commitsUrl={commitsUrl}
      avatar={avatar}
      userLogin={userLogin}
      linkToGithub={linkToGithub}
      languagesUrl={languagesUrl}
      decription={decription}
      isLoading={isLoading}
      errors={errors}
      handleGoToRepositories={handleGoToRepositories}
    />
  );
};

export default RepositoryPageContainer;
