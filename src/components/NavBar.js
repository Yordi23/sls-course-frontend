import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { inject } from "mobx-react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,19,62,1) 2%, rgba(6,31,80,1) 4%, rgba(7,44,98,1) 8%, rgba(9,61,121,1) 29%, rgba(7,89,145,1) 53%, rgba(5,129,181,1) 86%, rgba(0,212,255,1) 100%)",
    padding: 14,
    marginBottom: 24,
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
  },
  header: {
    flexBasis: "50%",
    display: "flex",
  },
  loginLogoutContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexBasis: "50%",
  },
  button: {
    color: "white",
  },
});

const NavBar = ({ authStore }) => {
  const auth0 = useAuth0();
  const { loginWithRedirect, logout } = auth0;
  const isAuthenticated = authStore.token;

  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div className={classes.header}>
        <h1 style={{ fontSize: 14, color: "white" }}>YD AUCTIONS</h1>
      </div>
      <div className={classes.loginLogoutContainer}>
        {!isAuthenticated && (
          <Button
            className={classes.button}
            onClick={() => loginWithRedirect({})}
          >
            Sign in
          </Button>
        )}

        {isAuthenticated && (
          <Button className={classes.button} onClick={() => logout({})}>
            Sign out
          </Button>
        )}
      </div>
    </div>
  );
};

export default inject(["authStore"])(NavBar);
