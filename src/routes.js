import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello world</h1>} />
        </Switch>
    </Router>
)