import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'

const Routes = () => (
    <Router>
        <Switch>
            <Header />
            <Route exact path="/" component={() => <h1>Hello world</h1>} />
        </Switch>
    </Router>
)

export default Routes