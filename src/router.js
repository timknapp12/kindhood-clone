import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';

export default(
    <Switch>
        <Route path='/' exact component={Shop}/>
        <Route path='/about' component={About}/>
    </Switch>
)