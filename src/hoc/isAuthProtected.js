import { useEffect } from "react/cjs/react.development";
import { Redirect } from "react-router";

export const IsAuthProtected = (Component) => {
  const IsAuthProtected = (props) => {
    useEffect(() => {
      console.log("You're logged in!");
    }, []);

    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (!token) return <Redirect to="/auth"></Redirect>;

    return <Component {...props}></Component>;
  };

  return IsAuthProtected;
};
