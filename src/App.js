import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";

import "./App.css";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/somewhere" exact></Route>
        <Route path="/somewhere_1" exact></Route>
      </Switch>
    </div>
  );
}

export default App;
