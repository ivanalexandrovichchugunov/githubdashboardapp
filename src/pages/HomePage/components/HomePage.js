import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { ROUTES } from "../../../routes/routeNames";

import {
  Button,
  Typography,
  Box,
  AppBar,
  Toolbar,
  withStyles,
  Container,
} from "@material-ui/core/";

import styles from "./styles";

const useStyles = makeStyles({
  root: {
    paddingTop: 10,
    fontSize: 20,
  },
  media: {
    height: 140,
  },
  body: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
});
const HomePage = ({}) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            GITHUB DSHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.body}>
        <Typography className={classes.root} variant="body1" component="p">
          Создать приложение с использованием CRA, Redux, redux-saga, hooks.
        </Typography>
        <Typography className={classes.root} variant="body1" component="p">
          Задание: Используя API реализовать Github Dashboard
        </Typography>
        <Typography className={classes.root} variant="body1" component="p">
          Необходимо используя API Github создать Front-end приложение, которое
          состоит из двух страниц:
        </Typography>
        <Typography className={classes.root} variant="body1" component="p">
          Главная страница – список репозиториев с возможностью поиска и
          страницами
        </Typography>
        <Typography className={classes.root} variant="body1" component="p">
          Карточка репозитория – страница с более детальной информацией по
          репозиторию
        </Typography>
        <Typography className={classes.root} variant="body1" component="p">
          В проекте использовать библиотеку компонентов Material UI
        </Typography>

        <Box className={classes.root}>
          <Button
            onClick={() => history.push(ROUTES.REPOSITORIES)}
            variant="contained"
            color="secondary"
          >
            Get Repositories
          </Button>
        </Box>
      </Box>

      <Box>
        <AppBar position="static">
          <Toolbar></Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default withStyles(styles)(HomePage);
