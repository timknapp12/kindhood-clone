import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import LookBook from './components/LookBook';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Product from './components/Product';
import Retail from './components/Retail';
import Press from './components/Press';

export default(
    <Switch>
        <Route path='/' exact component={Shop}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/faq' component={FAQ}/>
        <Route path='/lookbook' component={LookBook}/>
        <Route path='/product/:id' component={Product}/>
        <Route path='/retail' component={Retail}/>
        <Route path='/press' component={Press}/>
    </Switch>
)