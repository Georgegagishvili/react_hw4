import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import MainPage from "./pages/main-page";
import UsersPage from "./pages/users-page/";
import ResourcesPage from "./pages/resources-page";
import AuthPage from "./pages/auth-page";

// import "./reset.css";
import "./App.css";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <MainPage></MainPage>
        </Route>
        <Route path="/users">
          <UsersPage></UsersPage>
        </Route>
        <Route path="/resources">
          <ResourcesPage></ResourcesPage>
        </Route>
        <Route path="/auth">
          <AuthPage></AuthPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
