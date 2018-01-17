import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import LookBook from './components/LookBook';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default(
    <Switch>
        <Route path='/' exact component={Shop}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/faq' component={FAQ}/>
        <Route path='/lookbook' component={LookBook}/>
    </Switch>
)