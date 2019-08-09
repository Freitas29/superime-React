import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './pages/main/Main'
import Show from './pages/animes/Show'

const Routes = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/animes/:id" component={ Show } />
        </Switch>
    </Router>
)

export default Routes