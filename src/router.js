import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';

export default(
    <Switch>
        <Route path='/' exact component={Shop}/>
    </Switch>
)