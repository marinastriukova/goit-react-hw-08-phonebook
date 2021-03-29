import { Switch, Route } from 'react-router-dom';
import { Component, lazy, Suspense } from 'react';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
import './App.css';
import AppBar from './components/AppBar';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const Phonebook = lazy(() => import('./components/Phonebook'));
const Login = lazy(() => import('./auth/Login/Login'));
const Registration = lazy(() => import('./auth/Registration/Registration'));


class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<h1>Loader...</h1>}>
          <Switch>
            <PublicRoute path="/" exact component={HomePage} />

            <PublicRoute path="/register" restricted redirectTo="/phonebook" component={Registration} />

            <PublicRoute path="/login" restricted redirectTo="/phonebook" component={Login} />

            <PrivateRoute path="/phonebook"  redirectTo="/login" component={Phonebook} />
          </Switch>
        </Suspense>
      </>
    );
  }

}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App);
