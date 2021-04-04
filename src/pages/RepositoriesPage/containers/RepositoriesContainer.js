import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { debounce } from "lodash";

import RepositoriesOverview from "../components/RepositoriesOverview";
import {
  GET_GITHUB_REPOSITORIES_REQUEST,
  GET_SEARCHED_REPOSITORIES_REQUEST,
  UPDATE_CURRENT_PAGE_ID,
  UPDATE_INPUT_VALUE,
} from "../actions";
import { ROUTES } from "../../../routes/routeNames";
import { PAGE } from "../../../constants/pageConstants";

const { ITEMS_PER_PAGE, DEFAULT_PAGE_ID, DEBOUNCE_DELAY } = PAGE;

const RepositoriesContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const {
    repositories,
    isLoading,
    searchInputValue,
    currentPageId,
  } = useSelector((state) => state.repositoriesPage);

  const handleGoToRepository = useCallback(
    (id) => {
      history.push(`${ROUTES.REPOSITORIES}/${id}`);
    },
    [history]
  );

  const handleGoToHome = useCallback(
    (id) => {
      history.push(`${ROUTES.HOME}`);
    },
    [history]
  );

  useEffect(() => {
    const isEmptyInput = searchInputValue.trim() === "";

    const params = {
      searchInputValue,
      currentPageId,
    };

    isEmptyInput
      ? dispatch(GET_GITHUB_REPOSITORIES_REQUEST())
      : dispatch(GET_SEARCHED_REPOSITORIES_REQUEST(params));
  }, []);

  const delayedQuery = useCallback(
    debounce(
      (params, isEmptyInput) =>
        isEmptyInput
          ? dispatch(GET_GITHUB_REPOSITORIES_REQUEST())
          : dispatch(GET_SEARCHED_REPOSITORIES_REQUEST(params)),
      DEBOUNCE_DELAY
    ),
    [dispatch]
  );

  const handleSearchInputChange = useCallback(
    (event) => {
      dispatch(UPDATE_INPUT_VALUE(event.target.value));

      if (currentPageId !== DEFAULT_PAGE_ID)
        dispatch(UPDATE_CURRENT_PAGE_ID(DEFAULT_PAGE_ID));

      const params = {
        searchInputValue: event.target.value,
        currentPageId,
      };

      const isEmptyInput = event.target.value.trim() === "";

      delayedQuery(params, isEmptyInput);
    },
    [dispatch, currentPageId, delayedQuery]
  );

  const handleClearInput = useCallback(
    (event) => {
      dispatch(UPDATE_INPUT_VALUE(""));

      if (currentPageId !== DEFAULT_PAGE_ID)
        dispatch(UPDATE_CURRENT_PAGE_ID(DEFAULT_PAGE_ID));

      const params = {
        searchInputValue: event.target.value,
        currentPageId,
      };

      const isEmptyInput = true;

      delayedQuery(params, isEmptyInput);
    },
    [dispatch, currentPageId, delayedQuery]
  );

  const getRepositoriesSubarray = useMemo(() => {
    if (currentPageId === "") dispatch(UPDATE_CURRENT_PAGE_ID(DEFAULT_PAGE_ID));

    const firstItemIndex = (currentPageId - 1) * ITEMS_PER_PAGE;

    return repositories.slice(firstItemIndex, firstItemIndex + ITEMS_PER_PAGE);
  }, [currentPageId, repositories, dispatch]);

  const handlePageChange = useCallback(
    (event, pageId) => {
      dispatch(UPDATE_CURRENT_PAGE_ID(pageId));

      const params = {
        searchInputValue,
        currentPageId: pageId,
      };

      const isEmptyInput = searchInputValue.trim() === "";

      if (!isEmptyInput) dispatch(GET_SEARCHED_REPOSITORIES_REQUEST(params));
    },
    [dispatch, searchInputValue]
  );

  return (
    <RepositoriesOverview
      handleSearchInputChange={handleSearchInputChange}
      handleGoToRepository={handleGoToRepository}
      repositories={repositories}
      isLoading={isLoading}
      handlePageChange={handlePageChange}
      currentPageId={currentPageId}
      searchInputValue={searchInputValue}
      getRepositoriesSubarray={getRepositoriesSubarray}
      handleClearInput={handleClearInput}
      handleGoToHome={handleGoToHome}
    />
  );
};

export default RepositoriesContainer;
