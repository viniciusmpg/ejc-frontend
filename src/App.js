import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PersonList from "./components/Person/PersonList";
import CreatePerson from "./components/Person/PersonForm";
import EditPerson from "./components/Person/EditPerson";
import LoginPage from "./components/Login/LoginPage";
import PrivateRoute from "./components/common/PrivateRoute";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={PersonList} />
        <PrivateRoute exact path="/adicionar" component={CreatePerson} />
        <PrivateRoute exact path="/editar/:id" component={EditPerson} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
};
