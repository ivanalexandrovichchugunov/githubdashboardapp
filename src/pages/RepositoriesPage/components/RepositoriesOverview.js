import PropTypes from "prop-types";

import {
  Box,
  Typography,
  withStyles,
  Button,
  Container,
  AppBar,
  Toolbar,
  LinearProgress,
  InputBase,
} from "@material-ui/core";

import Pagination from "@material-ui/lab/Pagination";

import { makeStyles, fade } from "@material-ui/core/styles";

import RepositoryCard from "../components/RepositoryCard/RepositoryCard";

import { PAGE } from "../../../constants/pageConstants";

import SearchIcon from "@material-ui/icons/Search";

import styles from "./styles";

const { DEFAULT_PAGE_ID, ITEMS_PER_PAGE } = PAGE;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
  },
}));
const RepositoriesOverview = ({
  repositories,
  isLoading,
  errors,
  handleGoToRepository,
  handleSearchInputChange,
  handlePageChange,
  handleClearInput,
  currentPageId,
  searchInputValue,
  getRepositoriesSubarray,
  handleGoToHome,
}) => {
  const classes = useStyles();
  return (
    <Container>
      <AppBar position="relative" className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            GITHUB DASHBOARD
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleGoToHome}
          >
            Home
          </Button>
          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={searchInputValue}
              onChange={handleSearchInputChange}
            />
          </Box>
        </Toolbar>
      </AppBar>
      {isLoading ? (
        <Box>
          <LinearProgress color="secondary" />
        </Box>
      ) : (
        <Box>
          {searchInputValue.trim() === "" ? (
            getRepositoriesSubarray.map((repository) => {
              return (
                <Box paddingTop={2} key={repository.id}>
                  <RepositoryCard
                    name={repository.name}
                    ownerUrl={repository.owner.html_url}
                    userLogin={repository.owner.login}
                    handleGoToDetails={() =>
                      handleGoToRepository(repository.id)
                    }
                  />
                </Box>
              );
            })
          ) : repositories.length !== 0 ? (
            repositories.map((repository) => {
              return (
                <Box paddingTop={2} key={repository.id}>
                  <RepositoryCard
                    name={repository.name}
                    ownerUrl={repository.owner.html_url}
                    userLogin={repository.owner.login}
                    handleGoToDetails={() =>
                      handleGoToRepository(repository.id)
                    }
                  />
                </Box>
              );
            })
          ) : (
            <Box className={classes.notFoundWrapper}>
              <Box className={classes.notFoundItem}>
                <Box>
                  <Typography
                    variant="h4"
                    component="h5"
                    className={classes.typographyStyle}
                  >
                    Oops! <br />
                  </Typography>
                  <Typography variant="h5" className={classes.typographyStyle}>
                    This repo can’t be found <br />
                    Please, try again
                  </Typography>
                </Box>
                <Button
                  className={classes.clearButton}
                  variant="text"
                  size="large"
                  color="primary"
                  onClick={handleClearInput}
                >
                  TRY AGAIN
                </Button>
              </Box>
            </Box>
          )}
          {repositories.length === 0 ? (
            ""
          ) : (
            <Box paddingTop={2}>
              <AppBar position="static">
                <Toolbar className={classes.pagination}>
                  <Pagination
                    color="secondary"
                    count={
                      searchInputValue.trim() === ""
                        ? ITEMS_PER_PAGE
                        : repositories.length < ITEMS_PER_PAGE
                        ? currentPageId
                        : currentPageId === ITEMS_PER_PAGE
                        ? currentPageId
                        : currentPageId + 1
                    }
                    defaultPage={DEFAULT_PAGE_ID}
                    onChange={handlePageChange}
                    page={
                      currentPageId !== "" ? currentPageId : DEFAULT_PAGE_ID
                    }
                  />
                </Toolbar>
              </AppBar>
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
};

RepositoriesOverview.propTypes = {};

export default withStyles(styles)(RepositoriesOverview);
