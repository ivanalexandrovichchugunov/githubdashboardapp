import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  withStyles,
  Link,
} from "@material-ui/core/";

import PropTypes from "prop-types";

import styles from "./styles";

const RepositoryCard = ({
  name,
  ownerUrl,
  userLogin,
  classes,
  handleGoToDetails,
}) => {
  return (
    <Box>
      <CardActions style={{ backgroundColor: "gainsboro" }}>
        <CardContent>
          <Box className={classes.avatarNameWrap}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </Box>
          <Typography>Owner: {userLogin}</Typography>
          <Typography>
            Link To GitHub:
            <Link color="secondary" target="_blank" href={ownerUrl}>
              {ownerUrl}
            </Link>
          </Typography>
        </CardContent>
      </CardActions>
      <CardActions style={{ backgroundColor: "gainsboro" }}>
        <Button
          onClick={handleGoToDetails}
          size="small"
          variant="contained"
          color="secondary"
        >
          Learn More
        </Button>
      </CardActions>
    </Box>
  );
};

RepositoryCard.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  ownerUrl: PropTypes.string.isRequired,
  handleGoToDetails: PropTypes.func.isRequired,
};

export default withStyles(styles)(RepositoryCard);
