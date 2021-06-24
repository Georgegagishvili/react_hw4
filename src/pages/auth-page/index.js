import { Link, useLocation, Switch, Route, Redirect } from "react-router-dom";
import classNames from "classnames";

import SignIn from "./sign-in";
import { IsNotAuthProtected } from "../../hoc/IsNotAuthProtected";

function AuthPage() {
  const { pathname } = useLocation();
  return (
    <div className="row bg-dark p-5" style={{ color: "white" }}>
      <div className="col-12 mb-5">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              to="/auth/sign-in"
              className={classNames("nav-link", {
                active: pathname.includes("/sign-in"),
              })}
            >
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/auth/sign-up"
              className={classNames("nav-link", {
                active: pathname.includes("sign-up"),
              })}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <Switch>
          <Route path="/auth/sign-in">
            <SignIn></SignIn>
          </Route>
          <Route path="/auth/sign-up">
            <SignIn></SignIn>
          </Route>
          <Redirect to="/auth/sign-in"></Redirect>
        </Switch>
      </div>
    </div>
  );
}

export default IsNotAuthProtected(AuthPage);
