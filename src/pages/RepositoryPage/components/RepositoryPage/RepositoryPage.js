import PropTypes from "prop-types";
import {
  withStyles,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  Link,
  Box,
  Badge,
  Container,
  AppBar,
  Toolbar,
  LinearProgress,
  CardHeader,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));
const RepositoryPage = ({
  repositoryName,
  starsUrl,
  commitsUrl,
  avatar,
  userLogin,
  linkToGithub,
  languagesUrl,
  decription,
  isLoading,
  handleGoToRepositories,
}) => {
  const classes = useStyles();
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">GITHUB DASHBOARD</Typography>
        </Toolbar>
      </AppBar>
      {isLoading ? (
        <Box>
          <LinearProgress color="secondary" />
        </Box>
      ) : (
        <Box>
          <Box paddingTop={2}>
            <CardActions style={{ backgroundColor: "gainsboro" }}>
              <CardContent>
                <Box>
                  <Box>
                    <Typography variant="h5" component="h2">
                      {repositoryName}
                      <Badge
                        badgeContent={starsUrl}
                        max={10000}
                        color="secondary"
                      >
                        <StarIcon fontSize="large" />
                      </Badge>
                    </Typography>
                  </Box>
                  <CardHeader
                    avatar={<Avatar src={avatar} className={classes.large} />}
                    title={<Typography>User login: {userLogin}</Typography>}
                    subheader={
                      <Typography>
                        Link to GitHub:{` `}
                        <Link
                          color="secondary"
                          target="_blank"
                          href={linkToGithub}
                        >
                          {linkToGithub}
                        </Link>
                      </Typography>
                    }
                  />
                </Box>
                <Box>
                  <Typography color="textSecondary">
                    Created: {new Date(commitsUrl).toDateString()}
                  </Typography>
                </Box>
                <Typography variant="body1" component="p">
                  Description: {decription}
                  <br />
                  Languages:
                  {Object.keys(languagesUrl).map((language, index) => {
                    return (
                      <Typography component="span" key={index}>
                        {" "}
                        {language}{" "}
                      </Typography>
                    );
                  })}
                </Typography>
              </CardContent>
            </CardActions>
          </Box>
          <CardActions style={{ backgroundColor: "gainsboro" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleGoToRepositories}
            >
              GO BACK
            </Button>
          </CardActions>
        </Box>
      )}
    </Container>
  );
};

RepositoryPage.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  repositoryName: PropTypes.string.isRequired,
  starsUrl: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  commitsUrl: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  linkToGithub: PropTypes.string.isRequired,
  userLogin: PropTypes.string.isRequired,
  languagesUrl: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string.isRequired,
  ]),
  decription: PropTypes.string.isRequired,
  handleGoToRepositories: PropTypes.func.isRequired,
};

export default withStyles(styles)(RepositoryPage);
