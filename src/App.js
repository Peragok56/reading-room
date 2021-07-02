import React, { Component } from "react";
import "./App.css";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Main from "./containers/Main/Main";
import { connect } from "react-redux";
import { autoLogin } from "./store/actions/Auth";

class App extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.autoLogin();
    }, 1);
  }

  render() {
    function routerUser(user) {
      switch (user) {
        case false:
          return (
            <Switch>
              <Route path='/auth' exact component={Auth} />
              <Route
                path='/'
                render={() => (user ? <Redirect to='/auth' /> : <Main />)}
              />
            </Switch>
          );
        case true:
          return (
            <Switch>
              <Route
                path='/auth'
                exact
                render={() =>
                  user ? <Redirect to='/' /> : <Redirect to='/auth' />
                }
              />
              <Route path='/' exact component={Main} />
            </Switch>
          );
        default:
          break;
      }
    }
    return <Layout>{routerUser(this.props.isAuthenticated)}</Layout>;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.session_key,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
