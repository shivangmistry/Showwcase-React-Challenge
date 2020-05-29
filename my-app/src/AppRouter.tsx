import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/Home/Home';
import Education from './views/Main/Education';

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/user/:username/education' component={Education} />
            
            <Route path='*' render={() => {
                return <Redirect to='/home' />
            }} />
        </Switch>
    )
}

export default AppRouter
