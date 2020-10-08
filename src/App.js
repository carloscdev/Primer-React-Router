import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import NotFound from './components/pages/NotFound'
import Ps from './components/pages/Ps'
import index from './components/pages/index'

function App() {
    return (
        <BrowserRouter>
                <Switch>
                <Route exact path="/" component={index} />
                <Route exact path="/Ps" component={Ps} />    
                <Route component={NotFound} />
                </Switch>
        </BrowserRouter>
    );
}

export default App;