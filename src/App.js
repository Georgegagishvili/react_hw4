import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import MainPage from "./pages/main-page";
import UsersPage from "./pages/users-page/";
import ResourcesPage from "./pages/resources-page";

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
        <Route path="/users" exact>
          <UsersPage></UsersPage>
        </Route>
        <Route path="/resources" exact>
          <ResourcesPage></ResourcesPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
