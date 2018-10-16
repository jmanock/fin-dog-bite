import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Form from '../PageComponents/Form';
import Rates from '../PageComponents/Rates';
import Buy from '../PageComponents/Buy';

const Main = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Form} />
        <Route path='/Rates' component={Rates} />
        <Route path='/Buy' component={Buy} />
      </Switch>
    </BrowserRouter>
  )
}
export default Main;
