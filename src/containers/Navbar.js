import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Grid,
  InputBase,
  Button,
  fade,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  image: { maxWidth: "100%", maxHeight: "100%" },
  appBar: { height: theme.spacing(7), boxShadow: "0 0 0 0.2px" },
  toolBar: { paddingLeft: 0, paddingRight: 0 },
  appBarLogo: { height: theme.spacing(4), marginTop: theme.spacing(1) },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(1),
  },
  signInButton: {
    backgroundColor: "#0095f6",
    fontWeight: "bold",
    color: "white",
    margin: theme.spacing(0.25),
  },
  signUpButton: {
    color: "#0095f6",
    fontWeight: "bold",
    margin: theme.spacing(0.25),
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="inherit" className={classes.appBar}>
      <Container maxWidth="md">
        <Toolbar className={classes.toolBar}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={4}>
              <div className={classes.appBarLogo}>
                <a href="https://www.instagram.com">
                  <img
                    alt="Instagram"
                    src="/nav_logo.png"
                    className={classes.image}
                  />
                </a>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.buttons}>
                <Button variant="contained" className={classes.signInButton}>
                  Sign in
                </Button>
                <Button className={classes.signUpButton}>Sign up</Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
