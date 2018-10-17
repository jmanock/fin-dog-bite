import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Holder from '../Holder';
import Rates from '../PageComponents/Rates';
import Buy from '../PageComponents/Buy';

const Main = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Holder} />
        <Route path='/Rates' component={Rates} />
        <Route path='/Buy' component={Buy} />
      </Switch>
    </BrowserRouter>
  )
}
export default Main;
