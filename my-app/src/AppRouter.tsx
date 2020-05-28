import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/Home/Home';
import Education from './views/Main/Education';

export class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route path='/user/:username/education' component={Education} />
                
                <Route path='*' render={() => {
                    return <Redirect to='/home' />
                }} />
            </Switch>
        )
    }
}

export default AppRouter
