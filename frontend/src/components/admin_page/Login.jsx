import React from "react";
import Styles from "./LoginModel.module.css";
import {Redirect} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/Auth/Action";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  
});

function LoginPage() {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const isauth = useSelector((state) => state.auth.isAuth);
  const [user_data, setAddData] = React.useState({});

  const handleLogin = () => {
    let payload = {
      user_id: user_data.user_id,
      password: user_data.password,
    };
    dispatch(loginRequest(payload));
  };

  if(isauth){
    return (<Redirect to="/" />)
  }

  return (
    <div>
      <div className={`card ${Styles.main} mt-5 `}>
        <h5 className={Styles.title}>Sign in</h5>

        <div className="row my-2">
          <div className="col">
            <div class="form-group">
              <label>User Id</label>
              <br />
              <input
                className={Styles.input}
                id="email"
                type="text"
                required
                onChange={(e) =>
                  setAddData({ ...user_data, user_id: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Password</label>
            <br />
            <input
              className={Styles.input}
              id="password"
              type="password"
              required
              onChange={(e) =>
                setAddData({ ...user_data, password: e.target.value })
              }
            />
          </div>
        </div>

        <div className="row my-1">
          <div className="col">
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" for="exampleCheck1">
                Keep me signed in
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button type="button" class="btn btn-danger" onClick={handleLogin}>
              Sign in
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default LoginPage;
