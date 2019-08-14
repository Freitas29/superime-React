import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './pages/main/Main'
import Show from './pages/animes/Show'
import Episodes from './pages/animes/Episodes'
import SignIn from './pages/user/SignIn'
import SignUp from './pages/user/SignUp'
import { isAuth } from './utils/isAuth'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        <Route {...rest} render={props => (
            isAuth() ?
                <Component {...props} />
            : <Redirect to="/user" />
        )} />
    );
};

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (

        <Route {...rest} render={props => (
            isAuth() ?
            <Redirect to="/" />
            : <Component {...props} /> 
        )} />
    );
};

const Routes = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route exact path="/animes/:id" component={ Show } />
            <Route path="/animes/:id/episodes" component={ Episodes } />
            <ProtectedRoute path="/user/sign-in" component={ SignIn } />
            <ProtectedRoute path="/user/sign-up" component={ SignUp } />
            {/* <PrivateRoute path="/user/edit" component={ UserEdit } */}
        </Switch>
    </Router>
)

export default Routes