import React from 'react';
import { Route } from 'react-router-dom';
import FizzBuzz from './FizzBuzz';
import NumberButton from './NumberButton';
import Pokemon from './Pokemon';

function Router() {
    return(
        <div>
            <Route path="/FizzBuzz" component={FizzBuzz}/>
            <Route path="/NumberButton" component={NumberButton}/>
            <Route path="/Pokemon" component={Pokemon}/>
        </div>
    )
}

export default Router;