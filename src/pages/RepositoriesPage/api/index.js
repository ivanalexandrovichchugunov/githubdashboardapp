import api from "../../../config/apiConfig";

import { PAGE } from "../../../constants/pageConstants";

const { ITEMS_PER_PAGE } = PAGE;

export const getAllRepositories = () => api.get("/repositories");

export const searchRepositoriesByName = ({ searchInputValue, currentPageId }) =>
  api.get(
    `/search/repositories?q=${searchInputValue}&page=${currentPageId}&per_page=${ITEMS_PER_PAGE}`
  );
