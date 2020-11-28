import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {useSelector , useDispatch} from "react-redux"
import {logoutUser} from "../../redux/Auth/Action"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  color: {
    background: "rgb(43,130,130)",
  },
  title: {
    flexGrow: 4,
  },
  manager: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user_data = useSelector(state => state.auth.user_data)

  const handleLogout = () => {
    dispatch(logoutUser())
  }
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.color}>
          <Toolbar>
            <Typography className={classes.title}>
              WELCOME TO APARTMENT DASHBOARD
            </Typography>
            <Typography className={classes.manager}>
              Manager : {user_data.manager_name}
            </Typography>
            <Button style={{backgroundColor:"red"}} className="m-1" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Navbar;
