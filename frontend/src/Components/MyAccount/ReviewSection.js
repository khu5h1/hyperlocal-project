import React from "react";

// Libraries
import classNames from "classnames";

// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Checkbox from "@material-ui/core/Checkbox";
import Rating from "@material-ui/lab/Rating";
import Divider from "@material-ui/core/Divider";
import { ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// local components
import product1 from "../../assets/HomePage/product1.png";
import theme from "../../consts/theme";
import { CardActionArea, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  reviewHeading: {
    marginLeft: "1vw",
  },
}));

function ReviewSection() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          style={{ marginLeft: "3vw", marginTop: "5vh" }}
        >
          Your Review
        </Typography>
        <br />
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={5}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Checkbox defaultChecked color="primary" />
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={product1}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                          >
                            Khushi Multi Store
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            style={{ color: "grey" }}
                          >
                            Ghaziabad, UttarPradesh, 123432
                          </Typography>
                          <Grid container>
                            <Grid xs={5}>
                              <Rating name="read-only" value={3} readOnly />
                            </Grid>
                            <Grid>
                              <Typography variant="caption" gutterBottom>
                                19. November. 2020
                              </Typography>
                            </Grid>
                          </Grid>
                          <Typography variant="subtitle2" gutterBottom>
                            Amazing Shop
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer", color: "#00A3FF" }}
                          >
                            Edit | Delete | Share
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider
                      className={classes.divider}
                      orientation="horizontal"
                    />
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Checkbox defaultChecked color="primary" />
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={product1}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            style={{ fontWeight: "bold" }}
                          >
                            Khushi Multi Store
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            style={{ color: "grey" }}
                          >
                            Ghaziabad, UttarPradesh, 123432
                          </Typography>
                          <Grid container>
                            <Grid xs={5}>
                              <Rating name="read-only" value={3} readOnly />
                            </Grid>
                            <Grid>
                              <Typography variant="caption" gutterBottom>
                                19. November. 2020
                              </Typography>
                            </Grid>
                          </Grid>
                          <Typography variant="subtitle2" gutterBottom>
                            Amazing Shop
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer", color: "#00A3FF" }}
                          >
                            Edit | Delete | Share
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider
                      className={classes.divider}
                      orientation="horizontal"
                    />
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <br />
      </div>
    </ThemeProvider>
  );
}

export default ReviewSection;
