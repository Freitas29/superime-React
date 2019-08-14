import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './pages/main/Main'
import Show from './pages/animes/Show'
import Episodes from './pages/animes/Episodes'
import User from './pages/user/User'

const Routes = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route exact path="/animes/:id" component={ Show } />
            <Route path="/animes/:id/episodes" component={ Episodes } />
            <Route path="/user" component={ User } />
        </Switch>
    </Router>
)

export default Routes